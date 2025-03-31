/*imports*/
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { Geist } from "next/font/google";
import { Tektur } from "next/font/google";
import { purpleText } from "@/app/layout";

//TODO: deixar o header menor, tipo todoist
//TODO: deixar o header mais bonito e responsivo
//TODO: fazer a pagina e os cards com opinioes embaixo
const Header = () => {
  const defaultColorText = "relative py-2 transition-colors hover:text-[#8c44d9] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]  after:bg-[#8c44d9] after:transition-all after:duration-400 hover:after:w-full";

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-30 bg-[#18181b] text-white flex items-center justify-between px-30 shadow-md z-50">
        <div className="select-none">
          <Image
            src={logo}
            alt="Logo"
            width={170}
            height={120}
            className="object-contain"
          />
        </div>
        <nav className="flex gap-6 text-2xl font-semibold">
          <Link href="/" className={defaultColorText}>
            Home
          </Link>
          <Link href="/about" className={defaultColorText}>
            Sobre
          </Link>
          <Link href="/contact" className={defaultColorText}>
            Contato
          </Link>
          <Link href="/login" className={defaultColorText}>
            Login
          </Link>
          <Link
            href="/signup"
            className={" bg-[#8c44d9] px-4 py-2 rounded-full font-(family-name:Tektur)"}
          >
            Try for free
          </Link>
        </nav>
      </header>
      {/* Espaço para evitar sobreposição do conteúdo */}
      <div className="h-full"></div>
    </>
  );
};

export default Header;
