import FeaturedProducts from "@/components/featured-products";
import ProductsWithTabs from "@/components/products-with-tabs";
// import HeroSection from "@/components/hero-section";
// import HeroSection1 from "@/components/hero-section1";
import HeroSection from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { BackgroundGradientAnimation } from "@/components/backgroud-gradient-animation";
import { AppDownloadLinks } from "@/components/app-download-links";
import BlogsSection from "@/components/blogs-section";
import Hero from "@/components/hero-section2";

export default function Home() {
  return (
    <div className="">
      {/* <HeroSection /> */}
      <Hero />
      <FeaturedProducts />
      <BackgroundGradientAnimation>
        <FeaturesSection />
      </BackgroundGradientAnimation>
      <ProductsWithTabs />
      <BlogsSection />
      <AppDownloadLinks />
    </div>
  );
}
