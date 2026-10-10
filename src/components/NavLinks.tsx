import Link from "next/link";
interface NavType {
  id: string;
  icon: string;
  nameBn: string;
}

const NavLinks = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/categories",
    { cache: "force-cache" },
  );
  const data = await res.json();

  return (
    <div className="flex gap-3 md:text-2xl text-lg my-4 ">
      {data.map((nav: NavType) => (
        <Link className="flex md:gap-1 " href={`/category/${nav.id}`} key={nav.id}>
          <span>{nav.icon}</span>
          <span className="hover:underline">{nav.nameBn}</span>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
