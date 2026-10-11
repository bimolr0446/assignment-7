import { ProductType } from "@/types/type";
import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );

  const headlineData: ProductType[] = await res.json();
  const formatNumber = (value: number) =>
    new Intl.NumberFormat("bn-BD", {
      maximumFractionDigits: 2,
    }).format(value);
  return (
    <div className="py-4 shadow">
      <MarqueeText direction="right" duration={10}>
        {headlineData.map((headline) => (
          <Link href={`/product/${headline.id}`} key={headline.id}>
            <span className="flex gap-2 items-center">
              <span>{headline.image}</span>
              <span className="text-lg">{headline.nameBn}</span>

              <span>
                {formatNumber(headline.today)} টাকা /
                {headline.unit === "kg"
                  ? "কেজি"
                  : headline.unit === "litre"
                    ? "লিটার"
                    : headline.unit === "piece"
                      ? "পিস"
                      : headline.unit === "dozen"
                        ? "ডজন"
                        : headline.unit}{" "}
              </span>

              <span
                className={
                  headline.change.dir === "up"
                    ? "text-red-500"
                    : "text-green-500"
                }
              >
                {headline.change.dir === "up" ? "▲" : "▼"} {headline.change.pct}
                %
              </span>
              <span className="mx-2">|</span>
            </span>
          </Link>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;
