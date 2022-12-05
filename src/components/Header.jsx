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
        <a href="#aboutUs" className="hover:bg-[#FFC28A] hover:text-black font-ProductSansRegular rounded-xl transition-all bg-[#1A1A1A] text-[#FDFCDC] py-3 px-5">
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