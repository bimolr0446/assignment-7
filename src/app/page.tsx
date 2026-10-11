import HeroBanner from "@/components/HeroBanner";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <section className="bg-[#f0f5f0]">
      <section className="container mx-auto  py-2 px-3 ">
        <HeroBanner></HeroBanner>
        <ProductList type="up" />

        <ProductList type="down" />

        <ProductList type="all" />
      </section>
    </section>
  );
}
