import Image from "next/image";
import { purpleText } from "../layout";
import Link from "next/link";
import homeImg from "../../public/homeImg.png";

//TODO: FAZER LOGO UM MVP MESMO Q SEJA FEIO,AJEITAR A IMAGEM E DEIXAR CERTINHA, FAZER AS OUTRAS PAGINAS
const SigninPage = () => {
  return (
    <div className=" w-full h-screen flex items-center justify-center">
      
      {/* Container flex para alinhar imagem e texto lado a lado */}
      <div className="flex items-center justify-center max-w-screen max-sm:flex-col">

        {/* TEXTO */}
      <div className="flex items-center justify-center">
          <Link href={"/dashboard"} className=" bg-[#8c44d9] p-4 rounded-s-full border-[#8614ff] border-8">
            <button className="hover:cursor-pointer">
              LogIn
            </button>
          </Link>
          <Link href={"/dashboard"} className=" bg-[#8c44d9] p-4 rounded-r-full border-[#8614ff] border-8">
            <button className="hover:cursor-pointer">
              LogIn
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
