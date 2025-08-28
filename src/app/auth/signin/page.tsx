import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Sign In",
};

async function signinAction(formData: FormData) {
  "use server";
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const callbackUrl = String(formData.get("callbackUrl") || "/admin");
  if (!email || !password) return;
  // NextAuth v5: pass FormData directly; provide redirectTo via hidden input
  try {
    await signIn("credentials", formData);
  } catch (error: unknown) {
    // In server actions, Auth.js throws an error with a `type` when signin fails (e.g. CredentialsSignin)
    if (error && typeof error === "object" && "type" in error) {
      const err = error as { type?: string };
      return redirect(`/auth/signin?error=${encodeURIComponent(err.type || "CredentialsSignin")}&callbackUrl=${encodeURIComponent(callbackUrl)}`);
    }
    throw error;
  }
}

export default async function SignInPage({ searchParams }: { searchParams: { callbackUrl?: string; error?: string } }) {
  const callbackUrl = searchParams?.callbackUrl || "/admin";
  return (
    <main className="mx-auto max-w-md px-4 py-12">
      <h1 className="mb-6 text-2xl font-semibold">Sign In</h1>
      {searchParams?.error ? (
        <p className="mb-4 rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          Invalid email or password.
        </p>
      ) : null}
      <form action={signinAction} className="grid gap-4">
        <input type="hidden" name="callbackUrl" value={callbackUrl} />
        <input type="hidden" name="options.redirectTo" value={callbackUrl} />
        <div className="grid gap-1">
          <label htmlFor="email" className="text-sm">Email</label>
          <input id="email" name="email" type="email" required className="rounded border px-3 py-2" />
        </div>
        <div className="grid gap-1">
          <label htmlFor="password" className="text-sm">Password</label>
          <input id="password" name="password" type="password" required className="rounded border px-3 py-2" />
        </div>
        <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Sign In</button>
      </form>
      <p className="mt-6 text-xs text-neutral-500">Only authorized users can access the admin dashboard.</p>
    </main>
  );
}
