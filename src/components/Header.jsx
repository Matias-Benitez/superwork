import React, { useState } from "react";
import Link from "./Link";
// Icons
import {
  RiMenuFill,
  RiCloseLine,
} from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
      <div className="">
        <a href="#" className="max-sm:text-4xl text-5xl font-bold relative p-1 font-ProductSansBold md:ml-8">
          superwork
        </a>
      </div>
      <nav
        className={`font-ProductSansRegular fixed bg-[#FDFCDC] w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"} top-0 xl:static flex-1 flex flex-col xl:flex-row items-center md:justify-end  gap-8 transition-all duration-500 z-50 md:mr-8 `}>
        <span className="max-sm:mt-10">
          <Link>
            ¿Por qué ser miembro?
          </Link>
        </span>
        <Link>
          Beneficios
        </Link>
        <Link>
          Membresia
        </Link>
        <span className="md:mr-12">
          <Link>
            Contacto
          </Link>
        </span>
        <Link>
          Ingresar
        </Link>
        <a href="#aboutUs" className="relative border border-black hover:bg-[#FFC28A] font-ProductSansRegular rounded-3xl -top-1 -left-1 hover:top-0 hover:left-0 transition-all bg-[#FED9B7] py-3 px-5 before:absolute before:top-1 before:left-1 before:hover:top-0 before:hover:left-0 before:w-full before:h-full before:border-8 before:border-black before:-z-10 before:transition-all before:rounded-3xl">
          Ser miembro
        </a>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2">
        {showMenu ? <RiCloseLine /> : <RiMenuFill />}
      </button>
    </header>
  );
};

export default Header;