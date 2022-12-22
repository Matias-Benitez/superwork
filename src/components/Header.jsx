import React, { useState } from "react";
import '../App.css'
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
        <a href="#" className="max-sm:text-4xl text-5xl font-bold relative p-1 font-ProductSansBold md:ml-8 ">
          superwork
        </a>
      </div>
      <nav
        className={`font-ProductSansRegular fixed bg-[#FDFCDC] w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"} top-0 xl:static flex-1 flex flex-col xl:flex-row items-center md:justify-end  gap-8 transition-all duration-500 z-50 md:mr-8 `}>
        <span className="max-sm:mt-10">
        <a href="#miembro" className="inline-block relative transition-all duration-300 before:content-[''] before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-black before:via-black before:to-black hover:before:w-full hover:before:opacity-100">¿Por qué ser miembro?
        </a>
         
        </span>
        <a href="#beneficios" className="inline-block relative transition-all duration-300 before:content-[''] before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-black before:via-black before:to-black hover:before:w-full hover:before:opacity-100">Beneficios
        </a>
        <a href="#membresia" className="inline-block relative transition-all duration-300 before:content-[''] before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-black before:via-black before:to-black hover:before:w-full hover:before:opacity-100">Membresía
        </a>
        
        <span className="md:mr-12">
        <a href="#contacto" className="inline-block relative transition-all duration-300 before:content-[''] before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-black before:via-black before:to-black hover:before:w-full hover:before:opacity-100">Contacto
        </a>
        </span>
        <a href="#membresia" className="inline-block relative transition-all duration-300 before:content-[''] before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-500 before:bg-gradient-to-r before:from-black before:via-black before:to-black hover:before:w-full hover:before:opacity-100 ">Ingresar
        </a>
        <a href="#membresia" className="hover:bg-[#FFC28A] hover:text-black font-ProductSansRegular rounded-xl transition-all bg-[#1A1A1A] text-[#FDFCDC] py-3 px-5 ">
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