import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export const metadata = { title: "Bootstrap Admin" };

async function createAdmin(formData: FormData) {
  "use server";
  const count = await prisma.user.count();
  if (count > 0) return;
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const name = String(formData.get("name") || "").trim();
  const passwordRaw = String(formData.get("password") || "");
  if (!email || !passwordRaw) return;
  const password = await bcrypt.hash(passwordRaw, 10);
  await prisma.user.create({ data: { email, name, password, role: "ADMIN" } });
  redirect("/auth/signin");
}

export default async function BootstrapPage() {
  const count = await prisma.user.count();
  if (count > 0) redirect("/");
  return (
    <main className="mx-auto max-w-md px-4 py-12">
      <h1 className="mb-6 text-2xl font-semibold">Create Admin User</h1>
      <p className="mb-4 text-sm text-neutral-600">This setup page is available only until the first user is created.</p>
      <form action={createAdmin} className="grid gap-3">
        <div className="grid gap-1">
          <label htmlFor="name" className="text-sm">Name</label>
          <input id="name" name="name" className="rounded border px-3 py-2" />
        </div>
        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm">Email</label>
          <input id="email" name="email" type="email" required className="rounded border px-3 py-2" />
        </div>
        <div className="grid gap-1">
          <label htmlFor="password" className="text-sm">Password</label>
          <input id="password" name="password" type="password" required className="rounded border px-3 py-2" />
        </div>
        <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Create Admin</button>
      </form>
    </main>
  );
}
