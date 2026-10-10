import Image from "next/image";
import DateDisplay from "./DateDisplay";

const Header = () => {
  return (
    <section className="container mx-auto py-5">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="bg-green-800  p-5 text-center rounded-2xl">
            <Image
              className="mx-auto"
              height={30}
              width={30}
              alt="Logo"
              src="/logo-icon.png"
            ></Image>
          </div>
          <div>
            <h2 className="md:text-5xl md:font-bold text-2xl sm:text-3xl font-semibold text-black">
              বাজার দর
            </h2>
           <DateDisplay></DateDisplay>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-green-800  p-5 text-center rounded-2xl">
            <Image
              className="mx-auto"
              height={30}
              width={30}
              alt="Logo"
              src="/logo-icon.png"
            ></Image>
          </div>
          <h2>Bimol Chandro roy</h2>
        </div>
      </div>
    </section>
  );
};

export default Header;
