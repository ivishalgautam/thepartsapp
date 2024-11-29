import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, X } from "lucide-react";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { appDownloadLinks } from "@/data/static";

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-12">
          <div className="col-span-5 flex flex-col items-start">
            <figure>
              <span className="inline-block rounded-lg border bg-white p-4 shadow-sm">
                <Image src={"/logo.png"} width={150} height={150} alt="logo" />
              </span>
            </figure>
            <div className="flex items-center justify-center gap-4">
              <a
                href={appDownloadLinks.googlePlayStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              >
                <figure className="aspect-video size-32">
                  <Image
                    src={"/icons/google-play-store.svg"}
                    width={100}
                    height={100}
                    alt="Google Play Store"
                    className="h-full w-full"
                  />
                </figure>
              </a>
              <a
                href={appDownloadLinks.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              >
                <figure className="aspect-video size-32">
                  <Image
                    src={"/icons/app-store.svg"}
                    width={100}
                    height={100}
                    alt="App store"
                    className="h-full w-full"
                  />
                </figure>
              </a>
            </div>
          </div>

          <div className="col-span-7 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-y-8 md:grid-cols-3">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Quick Links</h2>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/products"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Contact Us</h2>
              <address className="text-sm not-italic text-muted-foreground">
                <p>123 Main Street</p>
                <p>Anytown, USA 12345</p>
                <p>Email: info@example.com</p>
                <p>Phone: (123) 456-7890</p>
              </address>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Follow Us</h2>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t py-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Parts App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
