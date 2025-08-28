export default function GallerySkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="aspect-video bg-neutral-200 animate-pulse rounded" />
      ))}
    </div>
  );
}
