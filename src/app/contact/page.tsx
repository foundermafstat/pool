export const dynamic = "force-dynamic";

export default function ContactPage() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
      <form action="/api/contact" method="post" className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="block text-sm font-medium">First name *</span>
            <input name="firstName" required className="mt-1 w-full border rounded p-2" />
          </label>
          <label className="block">
            <span className="block text-sm font-medium">Last name</span>
            <input name="lastName" className="mt-1 w-full border rounded p-2" />
          </label>
        </div>
        <label className="block">
          <span className="block text-sm font-medium">Email *</span>
          <input type="email" name="email" required className="mt-1 w-full border rounded p-2" />
        </label>
        <label className="block">
          <span className="block text-sm font-medium">Phone *</span>
          <input name="phone" required className="mt-1 w-full border rounded p-2 phone-number" />
        </label>
        <label className="block">
          <span className="block text-sm font-medium">Message *</span>
          <textarea name="message" required rows={5} className="mt-1 w-full border rounded p-2" />
        </label>
        <button type="submit" className="mt-2 inline-flex items-center justify-center rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800 focus:outline-blue-900">
          Send
        </button>
      </form>
    </main>
  );
}
