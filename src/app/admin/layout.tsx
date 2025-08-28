import Link from "next/link";
import { signOut } from "@/auth";

export const metadata = {
  title: "Admin | Pool Cage Experts",
};

async function doSignOut() {
  "use server";
  await signOut({ redirectTo: "/" });
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <header className="mb-8 flex items-center justify-between">
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/admin" className="underline">
            Dashboard
          </Link>
          <Link href="/admin/posts" className="underline">
            Posts
          </Link>
          <Link href="/admin/users" className="underline">
            Users
          </Link>
        </nav>
        <form action={doSignOut}>
          <button className="rounded border px-3 py-1 text-sm hover:bg-accent">Sign out</button>
        </form>
      </header>
      {children}
    </div>
  );
}
