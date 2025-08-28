import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { auth } from "@/auth";
import bcrypt from "bcryptjs";

export const dynamic = "force-dynamic";

async function assertAdmin() {
  const session = await auth();
  if (!session || session.user?.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }
}

async function createUser(formData: FormData) {
  "use server";
  await assertAdmin();
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const name = String(formData.get("name") || "").trim();
  const role = (String(formData.get("role") || "USER").toUpperCase() === "ADMIN" ? "ADMIN" : "USER") as "USER" | "ADMIN";
  const passwordRaw = String(formData.get("password") || "");
  if (!email || !passwordRaw) return;
  const password = await bcrypt.hash(passwordRaw, 10);
  await prisma.user.create({ data: { email, name, role, password } });
  revalidatePath("/admin/users");
}

async function updateRole(formData: FormData) {
  "use server";
  await assertAdmin();
  const id = String(formData.get("id") || "");
  const role = (String(formData.get("role") || "USER").toUpperCase() === "ADMIN" ? "ADMIN" : "USER") as "USER" | "ADMIN";
  if (!id) return;
  await prisma.user.update({ where: { id }, data: { role } });
  revalidatePath("/admin/users");
}

async function resetPassword(formData: FormData) {
  "use server";
  await assertAdmin();
  const id = String(formData.get("id") || "");
  const passwordRaw = String(formData.get("password") || "");
  if (!id || !passwordRaw) return;
  const password = await bcrypt.hash(passwordRaw, 10);
  await prisma.user.update({ where: { id }, data: { password } });
  revalidatePath("/admin/users");
}

async function deleteUser(formData: FormData) {
  "use server";
  await assertAdmin();
  const id = String(formData.get("id") || "");
  if (!id) return;
  await prisma.user.delete({ where: { id } });
  revalidatePath("/admin/users");
}

export default async function AdminUsersPage() {
  await assertAdmin();
  const users: { id: string; name: string | null; email: string | null; role: "USER" | "ADMIN"; createdAt: Date }[] = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    select: { id: true, name: true, email: true, role: true, createdAt: true },
  });

  return (
    <main>
      <h1 className="mb-6 text-2xl font-semibold">Users</h1>

      <section className="mb-10 rounded border p-4">
        <h2 className="mb-4 text-lg font-medium">Create User</h2>
        <form action={createUser} className="grid gap-3 sm:max-w-lg">
          <div className="grid gap-1">
            <label htmlFor="name" className="text-sm">Name</label>
            <input id="name" name="name" className="rounded border px-3 py-2" />
          </div>
          <div className="grid gap-1">
            <label htmlFor="email" className="text-sm">Email</label>
            <input id="email" name="email" type="email" required className="rounded border px-3 py-2" />
          </div>
          <div className="grid gap-1">
            <label htmlFor="role" className="text-sm">Role</label>
            <select id="role" name="role" className="rounded border px-3 py-2">
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </div>
          <div className="grid gap-1">
            <label htmlFor="password" className="text-sm">Password</label>
            <input id="password" name="password" type="password" required className="rounded border px-3 py-2" />
          </div>
          <button type="submit" className="w-fit rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Create</button>
        </form>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-medium">All Users</h2>
        <div className="divide-y rounded border">
          {users.map((u) => (
            <div key={u.id} className="grid gap-2 p-3 sm:flex sm:items-center sm:justify-between">
              <div>
                <div className="font-medium">{u.name || u.email}</div>
                <div className="text-xs text-neutral-500">{u.email} • {new Date(u.createdAt).toLocaleDateString("en-US")}</div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <form action={updateRole} className="flex items-center gap-2">
                  <input type="hidden" name="id" value={u.id} />
                  <select name="role" defaultValue={u.role} className="rounded border px-2 py-1 text-sm">
                    <option value="USER">USER</option>
                    <option value="ADMIN">ADMIN</option>
                  </select>
                  <button className="rounded border px-3 py-1 text-sm hover:bg-accent">Update Role</button>
                </form>
                <form action={resetPassword} className="flex items-center gap-2">
                  <input type="hidden" name="id" value={u.id} />
                  <input name="password" type="password" placeholder="New password" className="rounded border px-2 py-1 text-sm" />
                  <button className="rounded border px-3 py-1 text-sm hover:bg-accent">Reset Password</button>
                </form>
                <form action={deleteUser}>
                  <input type="hidden" name="id" value={u.id} />
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
