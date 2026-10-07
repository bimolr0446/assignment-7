import Link from "next/link";
interface NavType {
    id: string,
    icon: string
    nameBn:string
}

const NavLinks = async() => {
    const res = await fetch(
      "https://api.abcz.workers.dev/api/bazardor/categories"
    );
    const data = await res.json();
    console.log(data);
    return (
      <div className="flex gap-3 md:text-2xl text-lg my-4 ">
        {data.map((nav: NavType) => (
          <Link className="flex md:gap-1 " href={`/${nav.id}`} key={nav.id}>
            <span>{nav.icon}</span>
            <span className="hover:underline">{nav.nameBn}</span>
          </Link>
        ))}
      </div>
    );
};

export default NavLinks;