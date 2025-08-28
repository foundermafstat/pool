import dynamic from "next/dynamic";
import GallerySkeleton from "@/components/GallerySkeleton";
import { notFound } from "next/navigation";

export const revalidate = 1800;

const ImageGallery = dynamic(() => import("@/components/ImageGallery"), {
  loading: () => <GallerySkeleton />,
});

export default function CategoryGalleryPage({ params }: { params: { category: string } }) {
  const { category } = params;
  if (!category) return notFound();
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Gallery: {category.replace(/-/g, " ")}</h1>
      <ImageGallery category={category} />
    </main>
  );
}
