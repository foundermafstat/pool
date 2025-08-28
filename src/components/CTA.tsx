import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

type Props = { primaryHref: string; secondaryHref?: string };

export default function CTA({ primaryHref, secondaryHref }: Props) {
  return (
    <div className="flex gap-3">
      <Button asChild>
        <Link href={primaryHref}>Get Quote</Link>
      </Button>
      {secondaryHref && (
        <Button asChild variant="outline">
          <Link href={secondaryHref}>
            <Phone className="mr-1" /> Call Us
          </Link>
        </Button>
      )}
    </div>
  );
}
