import { Link } from "react-router-dom";
import Input from "../../components/Input";
import BtnSubmit from "../../components/BtnSubmit";

function Login() {
 return (
   <main className="bg-custom-bg w-screen h-screen">
     <div className="bg-white/10 border-[1px] border-white/15 w-full h-full flex flex-col items-center justify-center space-y-4">
       <h1 className="text-teal-400 font-bold text-3xl text-center">
         FRONTEND <br /> FUSION
       </h1>

       <form className="w-full space-y-7 px-4 flex flex-col items-center">
         <Input type="email" label="E-mail" />
         <Input type="password" label="Senha"/>
         <BtnSubmit>Entrar</BtnSubmit>
         <p className="text-white">Ainda não tem conta? <Link className="text-teal-500" to="/register">Cadastre-se</Link></p>
       </form>
     </div>
   </main>
 );
}

export default Login;