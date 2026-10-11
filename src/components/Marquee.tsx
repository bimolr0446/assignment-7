import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
interface HeadlineType {
  id: string;
  nameBn: string;
  today: string;
  image: string;
  change: {
    dir: string;
    pct: number;
  };
}
const Marquee = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );

  const headlineData: HeadlineType[] = await res.json();
  console.log(headlineData);
  return (
    <div className="py-4 shadow">
      <MarqueeText direction="right" duration={10}>
        {headlineData.map((headline) => (
          <Link href={`/product/${headline.id}`} key={headline.id}>
            <span className="flex gap-2 items-center">
              <span>{headline.image}</span>
              <span className="text-lg">{headline.nameBn}</span>

              <span>{headline.today} টাকা/কেজি </span>

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
