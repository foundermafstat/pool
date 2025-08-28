import dynamic from "next/dynamic";
import GallerySkeleton from "@/components/GallerySkeleton";

export const revalidate = 1800; // 30 minutes ISR

const ImageGallery = dynamic(() => import("@/components/ImageGallery"), {
  loading: () => <GallerySkeleton />,
});

const FloridaMap = dynamic(() => import("@/components/FloridaMap"), {
  loading: () => <div className="h-64 bg-blue-100 animate-pulse" />,
});

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Project Gallery</h1>
      <p className="text-neutral-600 mb-6">Recent pool cage and screen enclosure projects.</p>
      <ImageGallery />
      <div className="mt-10">
        <FloridaMap />
      </div>
    </main>
  );
}
