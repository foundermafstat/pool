import Link from "next/link";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import { CITIES } from "@/lib/locations";
import { SERVICES } from "@/lib/services";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { cn } from "@/lib/utils";


export default function Home() {
  return (
    <main id="main">
      <div className="container mx-auto px-4 py-6 md:py-8 mt-8">
        <Hero
          title="Transform Your Outdoor Space with Premium Pool Enclosures"
          subtitle="Hurricane-rated installations across Florida's Gulf Coast"
          description="Custom pool cages, lanai screen enclosures, rescreens, and repairs completed by licensed & insured pros. Enjoy fast turnaround times, clean job sites, and outstanding craftsmanship."
          image="/placeholder.svg"
        />
      </div>

      <div className="container mx-auto px-4 mt-16">
        <section className="rounded-card bg-gradient-to-br from-primary/5 to-primary/10 p-8">
          <h2 className="text-2xl font-bold text-center mb-8 relative">
            <span className="inline-block relative">
              Why Homeowners Choose Us
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary/60 rounded-full"></div>
            </span>
          </h2>
          
          <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-neutral-700">
            <li className="rounded-card bg-white p-6 shadow-md border border-gray-100 flex flex-col">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Engineer-Approved Designs</h3>
              <p className="text-sm text-gray-600">Every pool enclosure is designed by certified engineers to meet strict Florida building codes and withstand hurricane-force winds.</p>
            </li>
            
            <li className="rounded-card bg-white p-6 shadow-md border border-gray-100 flex flex-col">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Premium Materials</h3>
              <p className="text-sm text-gray-600">We use only the highest quality extruded aluminum, stainless steel fasteners and high-performance screen mesh for lasting durability.</p>
            </li>
            
            <li className="rounded-card bg-white p-6 shadow-md border border-gray-100 flex flex-col">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Lifetime Warranty</h3>
              <p className="text-sm text-gray-600">Our workmanship is backed by a lifetime warranty because we stand behind the quality of our installations and materials.</p>
            </li>
          </ul>
        </section>
      </div>

      <div className="container mx-auto px-4 mt-16 mb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold relative">
            <span className="inline-block relative">
              Our Services
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-primary/60 rounded-full"></div>
            </span>
          </h2>
          <Link href="/services" className="rounded-full px-5 py-2 bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors">View all</Link>
        </div>
      </div>
      <section className="container mt-4">
        <Carousel 
          items={
            SERVICES.map((service, index) => {
              // Use local placeholder.svg file
              const imageSrc = "/placeholder.svg";
              
              const slug = service.slug;
              return (
                <Card
                  key={slug}
                  card={{
                    title: service.name,
                    category: "Service",
                    src: imageSrc,
                    content: (
                      <div className="flex flex-col gap-6">
                        <p className="text-lg">{service.description}</p>
                        <div className="flex gap-4">
                          <Link 
                            href={`/services/${slug}`}
                            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                          >
                            Learn more
                          </Link>
                          <Link 
                            href="/contact/quote" 
                            className="rounded-md border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50"
                          >
                            Get a quote
                          </Link>
                        </div>
                      </div>
                    ),
                    slug: slug // Pass the slug directly to the card
                  }}
                  index={index}
                />
              );
            })
          }
        />
      </section>

      <div className="container mx-auto px-4 mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold relative">
            <span className="inline-block relative">
              Service Areas
              <div className="absolute -bottom-2 left-0 w-16 h-1 bg-primary/60 rounded-full"></div>
            </span>
          </h2>
          <Link href="/locations" className="rounded-full px-5 py-2 bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors">All locations</Link>
        </div>

        <div className="rounded-card bg-gradient-to-br from-gray-50 to-gray-100 p-8">
          <div className="mb-6">
            <p className="text-gray-600 max-w-3xl">We proudly serve homeowners throughout Florida's Gulf Coast region with expert pool enclosure and screen services.</p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {CITIES.map((c) => (
              <li key={c} className="rounded-card bg-white border border-gray-100 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                <Link 
                  href={`/locations/${c}`} 
                  className="flex items-center p-4 text-gray-700 hover:text-primary transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary/70 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium">{c.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase())}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Testimonials section - Infinite Moving Cards */}
      <div className="container mx-auto px-4 mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 relative">
            <span className="inline-block relative">
              What Our Customers Say
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary/60 rounded-full"></div>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Don&apos;t just take our word for it. Here&apos;s what homeowners across Florida are saying about our pool enclosure services.</p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 overflow-hidden">
        <InfiniteMovingCards
          items={[
            {
              quote: "They installed our new pool cage in just 4 days. The quality is amazing and it's already survived a major storm with no issues!",
              name: "Michael Thompson",
              title: "Sarasota, FL",
            },
            {
              quote: "After Hurricane Ian damaged our lanai, they restored it perfectly. Great attention to detail and they kept everything clean throughout the process.",
              name: "Sarah Johnson",
              title: "Bradenton, FL",
            },
            {
              quote: "Their team was professional from start to finish. The new screen enclosure has transformed our backyard. Worth every penny.",
              name: "Robert Davis",
              title: "Venice, FL",
            },
            {
              quote: "We were impressed by how quickly they responded to our request and completed the installation. The result exceeded our expectations!",
              name: "Jennifer Williams",
              title: "Lakewood Ranch, FL",
            },
            {
              quote: "The crew was extremely knowledgeable and helped us choose the best options for our specific needs. Couldn't be happier with our new pool enclosure.",
              name: "David Miller",
              title: "Naples, FL",
            },
          ]}
          direction="right"
          speed="slow"
        />
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mt-4">
          <Link href="/contact/quote" className="rounded-full bg-primary text-white font-medium px-8 py-3 inline-block hover:bg-primary/90 transition-colors">
            Get Your Free Quote Today
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <section className="mt-16 mb-12">
          <div className="rounded-card border bg-gradient-to-br from-primary/5 to-primary/10 p-8">
            <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
            <CTA primaryHref="/contact/quote" secondaryHref="tel:+19415550123" />
            <p className="mt-3 text-neutral-600">No obligation. We'll reply within 1 business day.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
