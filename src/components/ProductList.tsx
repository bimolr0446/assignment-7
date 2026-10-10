import Link from "next/link";

interface ProductType {
  id: number;
  nameBn: string;
  categoryIcon: string;
  today: number;
  unit: string;
  image: string;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
}

interface ProductListProps {
  type: "up" | "down" | "all";
}

const ProductList = async ({ type }: ProductListProps) => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );

  if (!res.ok) {
    throw new Error("Product fetch failed");
  }

    const products: ProductType[] = await res.json();
    
     const formatNumber = (value: number) =>
       new Intl.NumberFormat("bn-BD", {
         maximumFractionDigits: 2,
       }).format(value);

  const filteredProducts =
    type === "up"
      ? products
          .filter((p) => p.change.dir === "up")
          .sort((a, b) => b.change.pct - a.change.pct)
          .slice(0, 6)
      : type === "down"
        ? products
            .filter((p) => p.change.dir === "down")
            .sort((a, b) => a.change.pct - b.change.pct)
            .slice(0, 6)
        : products;

  const title =
    type === "up"
      ? "আজ দাম বেড়েছে"
      : type === "down"
        ? "আজ দাম কমেছে"
        : "সব পণ্য";

  return (
    <section className="mt-8">
      <h2 className="my-4 text-xl font-bold text-black">
        {type === "up" && <span className="text-red-600">▲ </span>}
        {type === "down" && <span className="text-green-600">▼ </span>}
        {title}
      </h2>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-2xl">
                  {product.image}
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">{product.nameBn}</h3>
                  <p className="text-sm text-gray-500">
                    প্রতি {" "}
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
    </section>
  );
};

export default ProductList;
