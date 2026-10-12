import { ProductType } from "@/types/type";
import { notFound } from "next/navigation";


const ProductDetailPage = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const { productId } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products/${productId}`,
  );
  const product: ProductType = await res.json();

  if (!product || !product.id) {
    notFound();
  }

  const formatNumber = (value: number) =>
    new Intl.NumberFormat("bn-BD", {
      maximumFractionDigits: 2,
    }).format(value);

  const minPrice = Math.min(...product.markets.map((market) => market.min));

  const maxPrice = Math.max(...product.markets.map((market) => market.max));
  const changeAmount = product.today - product.yesterday;

  return (
    <section className="bg-[#f0f5f0] py-4">
      <section className="container mx-auto">
        <div className="space-y-4">
          {/* Product Header */}
          <section className="flex items-center justify-between gap-4 rounded-xl border border-[#e0e9e0] bg-[#fbfdfb] p-4 sm:p-6">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#eef4ee] text-3xl sm:h-16 sm:w-16">
                {product.image || product.categoryIcon}
              </div>

              <div className="min-w-0">
                <h1 className="text-xl font-extrabold sm:text-2xl">
                  {product.nameBn}
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                  প্রতি{" "}
                  {product.unit === "kg"
                    ? "কেজি"
                    : product.unit === "liter"
                      ? "লিটার"
                      : product.unit === "piece"
                        ? "পিস"
                        : product.unit === "dozen"
                          ? "ডজন"
                          : product.unit}{" "}
                  · {product.nameBn}
                </p>

                <p className="mt-2 text-xs text-gray-600 sm:text-sm">
                  গতকালের তুলনায় আজকের দাম
                  <span className="font-bold px-1">
                    {changeAmount > 0
                      ? "বেড়েছে"
                      : changeAmount < 0
                        ? "কমেছে"
                        : "একই আছে"}
                  </span>
                  {formatNumber(Math.abs(changeAmount))} টাকা
                </p>
              </div>
            </div>

            <div className="shrink-0 rounded-xl bg-[#f0f5f0] px-3 py-4 text-center sm:px-6">
              <p className="text-xs text-gray-500">আজকের দাম</p>
              <p className="text-2xl font-extrabold sm:text-3xl">
                {formatNumber(product.today)}
              </p>
              <p className="text-xs text-gray-500">টাকা / কেজি</p>

              <p
                className={`rounded-full px-3 py-2 text-xs font-semibold ${
                  product.change.dir === "up"
                    ? "bg-red-50 text-red-600"
                    : product.change.dir === "down"
                      ? "bg-green-50 text-green-600"
                      : "bg-gray-100 text-gray-600"
                }`}
              >
                {product.change.dir === "up"
                  ? "▲"
                  : product.change.dir === "down"
                    ? "▼"
                    : "—"}{" "}
                {product.change.pct}%
              </p>
            </div>
          </section>

          {/* Price Summary */}
          <section className="rounded-xl border border-[#e0e9e0] bg-[#fbfdfb] p-4 sm:p-5">
            <h2 className="mb-3 text-base font-bold">দামের সারসংক্ষেপ</h2>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {/* Minimum Price */}
              <div className="rounded-xl border border-[#e0e9e0] p-4">
                <p className="text-xs font-medium text-gray-600">
                  সর্বনিম্ন দাম
                </p>

                <p className="mt-1 text-xl font-extrabold text-green-700">
                  {formatNumber(minPrice)}{" "}
                  <span className="text-sm font-medium">টাকা</span>
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  সব বাজারের মধ্যে সর্বনিম্ন দাম
                </p>
              </div>

              {/* Maximum Price */}
              <div className="rounded-xl border border-[#e0e9e0] p-4">
                <p className="text-xs font-medium text-gray-600">
                  সর্বোচ্চ দাম
                </p>

                <p className="mt-1 text-xl font-extrabold text-red-600">
                  {formatNumber(maxPrice)}{" "}
                  <span className="text-sm font-medium">টাকা</span>
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  সব বাজারের মধ্যে সর্বোচ্চ দাম
                </p>
              </div>

              {/* Today's Price */}
              <div className="rounded-xl border border-[#e0e9e0] p-4">
                <p className="text-xs font-medium text-gray-600">আজকের দাম</p>

                <p className="mt-1 text-xl font-extrabold text-green-700">
                  {formatNumber(product.today)}{" "}
                  <span className="text-sm font-medium">টাকা</span>
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  প্রতি কেজির আজকের দাম
                </p>
              </div>
            </div>
          </section>

          {/* Market Price Table */}
          <section className="rounded-xl border border-[#e0e9e0] bg-[#fbfdfb] p-4 sm:p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-base font-bold">বাজারভিত্তিক আজকের দাম</h2>

              <span className="rounded-full bg-[#edf4ed] px-3 py-1 text-xs font-semibold text-gray-600">
                মোট {formatNumber(product.markets.length)}টি বাজার
              </span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-[#e0e9e0]">
              <table className="w-full min-w-[600px] border-collapse text-sm">
                <thead className="bg-[#f7faf7] text-gray-500">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">বাজার</th>
                    <th className="px-4 py-3 text-left font-semibold">বিভাগ</th>
                    <th className="px-4 py-3 text-right font-semibold">
                      সর্বনিম্ন
                    </th>
                    <th className="px-4 py-3 text-right font-semibold">
                      সর্বোচ্চ
                    </th>
                    <th className="px-4 py-3 text-right font-semibold">গড়</th>
                  </tr>
                </thead>

                <tbody>
                  {product.markets.map((market, index) => {
                    const average = (market.min + market.max) / 2;

                    return (
                      <tr
                        key={`${market.market}-${index}`}
                        className="border-t border-[#e0e9e0] transition hover:bg-[#edf4ed]"
                      >
                        <td className="px-4 py-3 font-medium">
                          {market.market}
                        </td>

                        <td className="px-4 py-3 text-gray-600">
                          {market.division}
                        </td>

                        <td className="px-4 py-3 text-right">
                          {formatNumber(market.min)} টাকা
                        </td>

                        <td className="px-4 py-3 text-right">
                          {formatNumber(market.max)} টাকা
                        </td>

                        <td className="px-4 py-3 text-right font-semibold">
                          {formatNumber(average)} টাকা
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};

export default ProductDetailPage;
