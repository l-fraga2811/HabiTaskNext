'use client';

/*imports*/
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";

const Header = () => {
  const yellowtext = "hover:text-yellow-400 py-2 transition-colors";
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-30 bg-gray-900 text-white flex items-center justify-between px-6 shadow-md z-50">
        <Link href="/">
          <Image
                src={require("../../public/logo.png")}
                alt="Logo"
                width={170}
                height={120}
                className="object-contain"
              />
          </Link> 
        <nav className="flex gap-6 text-2xl font-medium">
          <Link href="/" className={yellowtext}>Home</Link>
          <Link href="/about" className={yellowtext}>Sobre</Link>
          <Link href="/contact" className={yellowtext}>Contato</Link>
          <Link href="/login" className={yellowtext+ " font-custom"}>Login</Link>
          <Link href="/signup" className={yellowtext + " bg-[#8c44d9] px-4 py-2 rounded-full"}>Try for free</Link>
        </nav>
      </header>
      {/* Espaço para evitar sobreposição do conteúdo */}
      <div className="h-full"></div>
    </>
  );
};

export default Header;
