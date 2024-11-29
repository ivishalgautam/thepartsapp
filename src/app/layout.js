import { GeistSans } from "geist/font/sans";
import "./globals.css";
import QueryProvider from "@/components/QueryClientProvider";
import { Toaster } from "sonner";
import Layout from "@/components/layout";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  title: "The Parts App",
  description: "The parts app",
  keywords: "The parts app",
  authors: [{ name: "Online Parts Shop" }],
  publisher: "Online Parts Shop",
  openGraph: {
    title: "The Parts App",
    description: "The parts app",
    images: [""],
  },
  alternates: {
    canonical: "",
  },
  verification: {
    google: "",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} overflow-x-hidden`}
        suppressHydrationWarning={true}
      >
        <QueryProvider>
          <Toaster richColors />
          <Layout>{children}</Layout>
        </QueryProvider>
      </body>
    </html>
  );
}
