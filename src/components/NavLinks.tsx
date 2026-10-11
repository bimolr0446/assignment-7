import { NavType } from "@/types/type";
import NavLinksClient from "./NavLinksClient";

const NavLinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );

  const data: NavType[] = await res.json();

  return (
    <section className="">
      <div className="container mx-auto">
        <NavLinksClient data={data} />;
      </div>
    </section>
  );
};

export default NavLinks;
