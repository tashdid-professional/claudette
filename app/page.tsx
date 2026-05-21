import FeaturedProducts from "@/components/FeaturedProducts";
import Banner from "@/components/Banner";
import BrandStory from "@/components/BrandStory";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
   <main className="font-sans">
    <Banner />
    <FeaturedProducts/>
    <BrandStory />
    <BlogSection />
   </main>
  );
}
