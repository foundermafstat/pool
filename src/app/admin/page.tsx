import prisma from "@/lib/prisma";

export default async function AdminDashboardPage() {
  const [usersCount, postsCount, publishedCount] = await Promise.all([
    prisma.user.count(),
    prisma.post.count(),
    prisma.post.count({ where: { published: true } }),
  ]);

  return (
    <main>
      <h1 className="mb-6 text-2xl font-semibold">Admin Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded border p-4">
          <div className="text-sm text-neutral-500">Users</div>
          <div className="text-2xl font-medium">{usersCount}</div>
        </div>
        <div className="rounded border p-4">
          <div className="text-sm text-neutral-500">Posts</div>
          <div className="text-2xl font-medium">{postsCount}</div>
        </div>
        <div className="rounded border p-4">
          <div className="text-sm text-neutral-500">Published</div>
          <div className="text-2xl font-medium">{publishedCount}</div>
        </div>
      </div>
    </main>
  );
}
