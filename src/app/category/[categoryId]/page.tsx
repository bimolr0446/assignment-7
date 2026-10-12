import ProductSort from "@/components/ProductSort";
import { ProductType } from "@/types/type";
import { notFound } from "next/navigation";


const CategoryDetailsPage = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`,
  );

  const categoryData: ProductType[] = await res.json();
if (!categoryData || categoryData.length === 0) {
  notFound();
}
  const formatNumber = (value: number) =>
    new Intl.NumberFormat("bn-BD", {
      maximumFractionDigits: 2,
    }).format(value);

  const categoryName = categoryData[0]?.categoryNameBn || "বাজারদর";

  return (
    <main className="container mx-auto">
      <div className="mt-10 px-4">
        {/* Category Header */}
        <section className="flex items-center gap-3 rounded-xl border border-[#e2eae4] bg-[#fafcfb] px-3 py-4 shadow-sm sm:px-4">
          <div className="flex md:h-20 h-10 md:w-20 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef2ee] text-2xl">
            {categoryData[0]?.categoryIcon || "🛒"}
          </div>

          <div>
            <h1 className="text-lg lg:text-2xl md:text-xl font-bold text-[#26372c]">{categoryName}</h1>

            <p className="text-xs md:text-sm lg:text-xl text-[#89938b]">
              {formatNumber(categoryData.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </section>

        {/* Functional Sorting and Product Cards */}
        <ProductSort products={categoryData} />
      </div>
    </main>
  );
};

export default CategoryDetailsPage;
