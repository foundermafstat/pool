import Image from "next/image";
import CTA from "@/components/CTA";

type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  primaryHref?: string;
  secondaryHref?: string;
};

export default function Hero({ title, subtitle, description, primaryHref = "/contact/quote", secondaryHref = "tel:+19415550123" }: Props) {
  return (
    <section className="relative overflow-hidden rounded-lg border bg-gradient-to-b from-white to-neutral-50 p-6 md:p-10">
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-3xl font-semibold md:text-4xl">{title}</h1>
        {subtitle && <p className="mt-2 text-neutral-700">{subtitle}</p>}
        {description && <p className="mt-3 max-w-prose text-neutral-600">{description}</p>}
        <div className="mt-6">
          <CTA primaryHref={primaryHref} secondaryHref={secondaryHref} />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-15">
        <Image src="/next.svg" alt="Pool Cage" fill priority quality={85} />
      </div>
    </section>
  );
}
