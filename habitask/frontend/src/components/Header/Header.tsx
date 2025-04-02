/*imports*/
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

//TODO: deixar o header menor em SM e MD, tipo todoist
//TODO: deixar o header mais bonito e responsivo
//TODO: fazer a pagina e os cards com opinioes embaixo
const Header = () => {
  const defaultColorText = "relative py-2 transition-colors hover:text-[#8c44d9] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px]  after:bg-[#8c44d9] after:transition-all after:duration-400 hover:after:w-full";
  const hideTextSm = " hidden sm:block";
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-20 bg-[#18181b] text-white flex items-center justify-between px-[2rem] z-50">
        <div className="select-none">
          <Image
            src={logo}
            alt="Logo"
            width={150}
            height={120}
            className="object-contain pt-1"
          />
        </div>
        <nav className="flex gap-6 text-xl font-semibold">
          <Link href="/" className={defaultColorText + hideTextSm}>
            Home
          </Link>
          <Link href="/about" className={defaultColorText + hideTextSm}>
            Sobre
          </Link>
          <Link href="/contact" className={defaultColorText + hideTextSm}>
            Contato
          </Link>
          <Link href="/login" className={defaultColorText + hideTextSm}>
            Login
          </Link>
          <Link
            href="/signup"
            className={" text-nowrap bg-[#8c44d9] px-4 py-2 rounded-full font-(family-name:Tektur)"}
          >
            Try for free
          </Link>
        </nav>
      </header >
      {/* Espaço para evitar sobreposição do conteúdo */}
      < div className="h-full" ></div >
    </>
  );
};

export default Header;
