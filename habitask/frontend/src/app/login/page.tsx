import Image from "next/image";
import { purpleText } from "../layout";
import Link from "next/link";
import homeImg from "../../public/homeImg.png";
import LoginForm from "@/components/LoginForm/LoginForm";
import LogSignButtons from "@/components/LogSignButtons/LogSignButtons";


//TODO: FAZER LOGO UM MVP MESMO Q SEJA FEIO,AJEITAR A IMAGEM E DEIXAR CERTINHA, FAZER AS OUTRAS PAGINAS
const LoginPage = () => {
  return (
    <div className=" w-full h-screen flex items-center justify-center">
        {/* TEXTO */}
        <div className="bg-[#2e2e36d5] p-8 rounded-lg border-[#8c44d991] border-4">
          <h1 className="max-md:pt-[2rem] max-md:text-4xl sm:text-5xl text-center justify-center font-bold text-white mb-8">
            Log In
          </h1>
          <LoginForm />
        </div>
    </div>
  );
};

export default LoginPage;
;
