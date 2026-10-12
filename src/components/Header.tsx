import Image from "next/image";
import DateDisplay from "./DateDisplay";
import { authClient } from "@/lib/auth-client";
import AuthButtons from "./AuthButtons";
import Link from "next/link";

const Header = async () => {
  // const {getData} = await authClient.getSession()
  // console.log(getData);
  return (
    <section className="border-b border-[#edf2ed]">
      <section className="container mx-auto px-2  py-6 text-[#26332b] sm:px-6 lg:px-10  ">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <Link href="/">
              <div className="bg-[#05893E]  p-5 text-center rounded-2xl">
                <Image
                  className="mx-auto"
                  height={30}
                  width={30}
                  alt="Logo"
                  src="/logo-icon.png"
                ></Image>
              </div>
            </Link>
            <div>
              <h2 className="md:text-5xl md:font-bold text-2xl sm:text-3xl font-semibold text-black">
                বাজার দর
              </h2>
              <DateDisplay></DateDisplay>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <AuthButtons></AuthButtons>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Header;
