import { Link } from "react-router-dom";
import BtnSubmit from "../../components/BtnSubmit";
import Input from "../../components/Input";

function Login() {
  return (
    <main className="bg-custom-bg w-screen h-screen flex items-center justify-center py-5">
      <div className="bg-white/5 flex flex-col items-center justify-center space-y-4 md:space-y-8 md:rounded-xl py-48 md:py-14 lg:py-8  w-screen md:w-3/5 lg:w-2/6 xl:w-1/4">
        <h1 className="text-teal-400 font-bold text-3xl md:text-5xl lg:text-4xl text-center">
          FRONTEND <br /> FUSION
        </h1>

        <form className="w-full space-y-7 px-6 md:px-10  lg:px-6 flex flex-col items-center md:text-lg lg:text-base">
          <div className="flex flex-col w-full">
            <Input type="email" text="E-mail" />
          </div>
          <div className="flex flex-col w-full">
            <Input type="password" text="Senha" />
          </div>
          <BtnSubmit>Entrar</BtnSubmit>
          <p className="text-white">
            Ainda não tem conta?{" "}
            <Link className="text-teal-500" to="/register">
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}

export default Login;
