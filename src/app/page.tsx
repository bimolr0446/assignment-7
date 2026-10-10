import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-6">
      <ProductList type="up" />

      <ProductList type="down" />

      <ProductList type="all" />
    </section>
  );
}
