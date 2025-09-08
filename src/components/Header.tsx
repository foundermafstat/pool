"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white shadow-md dark:bg-gray-900 dark:border-b dark:border-gray-800">
      {/* Top info bar */}
      <div className="bg-primary text-white text-sm py-1 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>(941) 555-0123</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Mon-Fri: 8AM-6PM</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-medium">FL License: #RX-0123456</span>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-primary to-primary/70">
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                P
              </div>
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Premium Pool
              </div>
              <div className="text-xs font-medium text-gray-600 dark:text-gray-400">Enclosures & Screen Rooms</div>
            </div>
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-6">
            {NAV.map((n) => (
              <NavigationMenuItem key={n.href}>
                <NavigationMenuLink asChild>
                  <Link 
                    href={n.href} 
                    className={cn(
                      "text-base font-medium text-gray-700 hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-white relative py-1 group",
                      "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                    )}
                  >
                    {n.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-5">
          <div className="hidden md:flex flex-col items-end">
            <div className="text-primary font-medium">Free Consultation</div>
            <a href="tel:+19415550123" className="text-base font-bold hover:text-primary transition-colors">(941) 555-0123</a>
          </div>
          
          <Button 
            asChild 
            className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all"
            size="lg"
          >
            <Link href="/contact/quote">Get Free Quote</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="md:hidden">
                Menu
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex items-center gap-3 mb-8 mt-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-primary to-primary/70">
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                    P
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                    Premium Pool
                  </div>
                  <div className="text-xs font-medium text-gray-600 dark:text-gray-400">Enclosures & Screen Rooms</div>
                </div>
              </div>
              
              <nav className="grid gap-3 p-2">
                {NAV.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    className="flex items-center rounded-lg px-3 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    <span className="font-medium">{n.label}</span>
                  </Link>
                ))}
              </nav>
              
              <div className="mt-6 space-y-4 px-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call us</p>
                    <a href="tel:+19415550123" className="font-bold">(941) 555-0123</a>
                  </div>
                </div>
                
                <Button asChild className="w-full rounded-full" onClick={() => setOpen(false)}>
                  <Link href="/contact/quote">Get Free Quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
