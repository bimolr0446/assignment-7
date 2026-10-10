import ProductList from '@/components/ProductList';
import Link from 'next/link';
import React from 'react';

const CategoryDetailsPage = async ({ params }: { params: { categoryId: string } }) => {
    const { categoryId } = await params
    const res = await fetch(
      `https://api.api-store.workers.dev/api/bazardor/products?category=${categoryId}`,
    );
    const categoryData = await res.json()
    console.log(categoryData);

    const formatNumber = (value: number) =>
      new Intl.NumberFormat("bn-BD", {
        maximumFractionDigits: 2,
      }).format(value);
    
    return (
      <div>
        <h2>Category Detail page</h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {categoryData.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-2xl">
                    {product.image}
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      {product.nameBn}
                    </h3>
                    <p className="text-sm text-gray-500">
                      প্রতি{" "}
                      {product.unit === "kg"
                        ? "কেজি"
                        : product.unit === "litre"
                          ? "লিটার"
                          : product.unit === "piece"
                            ? "পিস"
                            : product.unit === "dozen"
                              ? "ডজন"
                              : product.unit}{" "}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">আজকের দাম</p>
                    <p className="text-xl font-bold text-gray-900">
                      {formatNumber(product.today)} টাকা
                    </p>
                  </div>

                  <span
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
                    {formatNumber(product.change.pct)}%
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
};

export default CategoryDetailsPage;