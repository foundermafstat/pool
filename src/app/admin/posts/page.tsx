import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import { slugify } from "@/lib/slug";

export const dynamic = "force-dynamic";

async function assertAdmin() {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }
}

async function createPost(formData: FormData) {
  "use server";
  await assertAdmin();
  const title = String(formData.get("title") || "").trim();
  const excerpt = String(formData.get("excerpt") || "").trim() || null;
  const content = String(formData.get("content") || "");
  if (!title || !content) return;
  let slug = slugify(title);
  // ensure unique slug
  const exists = await prisma.post.findUnique({ where: { slug } });
  if (exists) slug = `${slug}-${Date.now().toString(36)}`;

  await prisma.post.create({
    data: { title, excerpt, content, slug, published: true },
  });

  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/sitemap.xml");
}

async function togglePublish(formData: FormData) {
  "use server";
  await assertAdmin();
  const id = String(formData.get("id") || "");
  const published = String(formData.get("published") || "false") === "true";
  if (!id) return;
  await prisma.post.update({ where: { id }, data: { published } });
  const post = await prisma.post.findUnique({ where: { id }, select: { slug: true } });
  revalidatePath("/blog");
  if (post?.slug) revalidatePath(`/blog/${post.slug}`);
  revalidatePath("/sitemap.xml");
}

async function deletePost(formData: FormData) {
  "use server";
  await assertAdmin();
  const id = String(formData.get("id") || "");
  if (!id) return;
  const post = await prisma.post.findUnique({ where: { id }, select: { slug: true } });
  await prisma.post.delete({ where: { id } });
  revalidatePath("/blog");
  if (post?.slug) revalidatePath(`/blog/${post.slug}`);
  revalidatePath("/sitemap.xml");
}

export default async function AdminPostsPage() {
  await assertAdmin();
  const posts: { id: string; title: string; slug: string; published: boolean; createdAt: Date }[] = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    select: { id: true, title: true, slug: true, published: true, createdAt: true },
  });

  return (
    <main>
      <h1 className="mb-6 text-2xl font-semibold">Posts</h1>

      <section className="mb-10 rounded border p-4">
        <h2 className="mb-4 text-lg font-medium">Create Post</h2>
        <form action={createPost} className="grid gap-3">
          <div className="grid gap-1">
            <label htmlFor="title" className="text-sm">Title</label>
            <input id="title" name="title" required className="rounded border px-3 py-2" />
          </div>
          <div className="grid gap-1">
            <label htmlFor="excerpt" className="text-sm">Excerpt</label>
            <textarea id="excerpt" name="excerpt" rows={2} className="rounded border px-3 py-2" />
          </div>
          <div className="grid gap-1">
            <label htmlFor="content" className="text-sm">Content</label>
            <textarea id="content" name="content" rows={8} required className="rounded border px-3 py-2" />
          </div>
          <button type="submit" className="w-fit rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Save</button>
        </form>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-medium">All Posts</h2>
        <div className="divide-y rounded border">
          {posts.map((p) => (
            <div key={p.id} className="flex items-center justify-between gap-4 p-3">
              <div>
                <div className="font-medium">{p.title}</div>
                <div className="text-xs text-neutral-500">/{p.slug}</div>
              </div>
              <div className="flex items-center gap-2">
                <form action={togglePublish}>
                  <input type="hidden" name="id" value={p.id} />
                  <input type="hidden" name="published" value={(!p.published).toString()} />
                  <button className="rounded border px-3 py-1 text-sm hover:bg-accent">
                    {p.published ? "Unpublish" : "Publish"}
                  </button>
                </form>
                <form action={deletePost}>
                  <input type="hidden" name="id" value={p.id} />
                  <button className="rounded border px-3 py-1 text-sm text-red-600 hover:bg-accent">Delete</button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
