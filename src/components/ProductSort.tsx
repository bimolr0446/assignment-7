"use client";

import { useState } from "react";
import Link from "next/link";
import { ProductType } from "@/types/type";

interface ProductSortProps {
  products: ProductType[];
}

const ProductSort = ({ products }: ProductSortProps) => {
  const [sort, setSort] = useState("default");

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "low") {
      return a.today - b.today;
    }

    if (sort === "high") {
      return b.today - a.today;
    }

    return 0;
  });

  const formatNumber = (value: number) =>
    new Intl.NumberFormat("bn-BD", {
      maximumFractionDigits: 2,
    }).format(value);

  const getUnit = (unit: string) => {
    switch (unit) {
      case "kg":
        return "কেজি";
      case "litre":
        return "লিটার";
      case "piece":
        return "পিস";
      case "dozen":
        return "ডজন";
      default:
        return unit;
    }
  };

  return (
    <>
      {/* Sort Control */}
      <div className="mt-3 flex items-center justify-end rounded-xl border border-[#e2eae4] bg-[#fafcfb] px-3 py-3 sm:px-4">
        

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-xs text-[#768078]">
            সাজান:
          </label>

          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="max-w-[175px] rounded-lg border border-[#dce5de] bg-white px-2 py-2 text-xs text-[#344239] outline-none focus:border-green-500"
          >
            <option value="default">ডিফল্ট</option>
            <option value="low">দাম: কম থেকে বেশি</option>
            <option value="high">দাম: বেশি থেকে কম</option>
          </select>
        </div>
      </div>

      {/* Product Count */}
      <p className="mb-2 mt-3 text-[11px] text-[#8a948c]">
        মোট {`${formatNumber(sortedProducts.length)}`} টি পণ্য দেখানো হচ্ছে
      </p>

      {/* Product Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2  gap-2.5 sm:gap-3 lg:grid-cols-3 ">
        {sortedProducts.map((product) => (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            className="group rounded-xl border border-[#e2eae4] bg-[#fafcfb] p-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#b9d5bf] hover:shadow-md sm:p-3.5"
          >
            <div className="flex min-w-0 items-center gap-2">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#f0f4f0] text-xl sm:h-10 sm:w-10">
                {product.image}
              </div>

              <div className="min-w-0">
                <h2 className="truncate text-xs font-bold text-[#303c33] group-hover:text-green-800 sm:text-sm">
                  {product.nameBn}
                </h2>

                <p className="text-[10px] text-[#8b948d]">
                  প্রতি {getUnit(product.unit)}
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-end justify-between gap-1">
              <div className="min-w-0">
                <p className="text-[10px] text-[#7d887f]">{`${sortedProducts.length}আজকের দাম`}</p>

                <p className="text-sm font-extrabold text-[#26372c] sm:text-base">
                  {formatNumber(product.today)} টাকা
                </p>
              </div>

              <span
                className={`shrink-0 rounded-full px-1.5 py-1 text-[9px] font-bold sm:px-2 ${
                  product.change.dir === "up"
                    ? "bg-[#fff0ee] text-[#e54c40]"
                    : product.change.dir === "down"
                      ? "bg-[#e9f8ef] text-[#169b59]"
                      : "bg-[#edf0ed] text-[#667169]"
                }`}
              >
                {product.change.dir === "up"
                  ? "▲"
                  : product.change.dir === "down"
                    ? "▼"
                    : "—"}{" "}
                {formatNumber(product.change.pct)}%
              </span>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default ProductSort;
