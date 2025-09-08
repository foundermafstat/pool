import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  primaryHref?: string;
  secondaryHref?: string;
  image?: string;
  imageAlt?: string;
};

export default function Hero({
  title,
  subtitle,
  description,
  primaryHref = "/contact/quote",
  secondaryHref = "tel:+19415550123",
  image = "/placeholder.svg",
  imageAlt = "Pool cage installation"
}: Props) {
  return (
    <section className="rounded-card relative overflow-hidden bg-gradient-to-b from-primary to-primary/90 text-white">
      {/* Mobile-first hero layout */}
      <div className="container mx-auto py-14 px-4 sm:py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          {/* Text content - mobile first (full width, then half) */}
          <div className="relative z-10 space-y-4">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium mb-2">
              #1 Pool Cage Experts in Florida
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              {title}
            </h1>
            {subtitle && <p className="text-lg sm:text-xl text-white/90 mt-2">{subtitle}</p>}
            {description && <p className="text-white/80 max-w-prose mt-3">{description}</p>}
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4 mt-6">
              <Link href={primaryHref} className="rounded-full bg-white text-primary font-medium px-8 py-3 text-center hover:bg-white/90 transition-colors">
                Get a Free Quote
              </Link>
              <Link href={secondaryHref} className="rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-3 text-center hover:bg-white/30 transition-colors">
                Call Us Today
              </Link>
            </div>
            
            <div className="mt-6 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-neutral-300 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-400"></div>
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-medium">Trusted by 500+ homeowners</span>
                <div className="flex text-yellow-300 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Image - hidden on smallest screens, shown on sm and up */}
          <div className="relative hidden sm:block h-64 md:h-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent z-10 md:hidden"></div>
            <div className="relative h-full aspect-[4/3] md:aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <Image 
                src={image} 
                alt={imageAlt}
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, 50vw"
                priority 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background pattern/decoration */}
      <div className="absolute inset-0 -z-10 opacity-20 overflow-hidden">
        <div className="absolute -right-24 -top-24 w-64 h-64 rounded-full bg-white/30 blur-3xl"></div>
        <div className="absolute -left-20 top-1/4 w-72 h-72 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute right-1/3 bottom-0 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
      </div>
    </section>
  );
}
