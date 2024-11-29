"use client";
import { usePathname } from "next/navigation";
import Header from "../Header";
import { Footer } from "../footer1";
import { useGeolocation } from "@uidotdev/usehooks";
import { Provider } from "react-wrap-balancer";

export default function Layout({ children }) {
  const pathname = usePathname();
  const state = useGeolocation();
  return (
    <div>
      <Provider>
        {pathname !== "/" && <Header />}
        <main className="min-h-screen bg-gray-100">
          <div className="h-full">{children}</div>
          <Footer />
        </main>
      </Provider>
    </div>
  );
}
