import Link from "next/link";
import prisma from "@/lib/prisma";

export const revalidate = 300; // 5 minutes

export const metadata = {
  title: "Blog | Pool Cage Experts",
  description: "Articles about pool cages, screen enclosures, maintenance, and Florida building best practices.",
};

type BlogListItem = { id: string; title: string; slug: string; excerpt: string | null; createdAt: Date };

export default async function BlogIndexPage() {
  const posts: BlogListItem[] = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    select: { id: true, title: true, slug: true, excerpt: true, createdAt: true },
  });

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Blog</h1>
      <ul className="grid gap-6 sm:grid-cols-2">
        {posts.map((p: BlogListItem) => (
          <li key={p.id} className="rounded-lg border p-6 hover:shadow">
            <h2 className="text-xl font-medium">
              <Link href={`/blog/${p.slug}`} className="underline text-blue-700">
                {p.title}
              </Link>
            </h2>
            {p.excerpt && <p className="mt-2 text-neutral-700">{p.excerpt}</p>}
            <p className="mt-2 text-xs text-neutral-500">{new Date(p.createdAt).toLocaleDateString("en-US")}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
