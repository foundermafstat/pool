import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import type { Metadata } from "next";

interface Params {
  params: { slug: string };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await prisma.post.findUnique({ where: { slug: params.slug } });
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | Blog` ,
    description: post.excerpt ?? post.content.slice(0, 160),
  };
}

export default async function BlogPostPage({ params }: Params) {
  const post = await prisma.post.findUnique({ where: { slug: params.slug } });
  if (!post || !post.published) notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 prose prose-neutral">
      <h1>{post.title}</h1>
      {post.excerpt && <p className="text-neutral-600 !mt-0">{post.excerpt}</p>}
      <div className="text-xs text-neutral-500 mb-6">
        {new Date(post.createdAt).toLocaleDateString("en-US")}
      </div>
      <article style={{ whiteSpace: "pre-wrap" }}>{post.content}</article>
    </main>
  );
}
