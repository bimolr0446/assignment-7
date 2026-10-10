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
    "https://api.api-store.workers.dev/api/bazardor/products",
  );

  const headlineData: HeadlineType[] = await res.json();

  return (
    <div className=" bg-gray-100 px-4">
      <MarqueeText direction="right" duration={10}>
        {headlineData.map((headline) => (
          <span className="flex gap-2 items-center" key={headline.id}>
            <span>{headline.image}</span>
            <span className="text-lg">{headline.nameBn}</span>

            <span>{headline.today} টাকা/কেজি </span>

            <span
              className={
                headline.change.dir === "up" ? "text-red-500" : "text-green-500"
              }
            >
              {headline.change.dir === "up" ? "▲" : "▼"} {headline.change.pct}%
            </span>
            <span className="mx-2">|</span>
          </span>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee;
