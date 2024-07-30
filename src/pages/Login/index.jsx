import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import BtnSubmit from "../../components/BtnSubmit";
import Input from "../../components/Input";
const signInSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
});
function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });
  const login = (data) => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const { email, password } = JSON.parse(storedUser);

      if (data.email === email && data.password === password) {
        console.log("Login realizado com sucesso!");
        navigate("/home");
      } else {
        console.log("E-mail ou senha incorretos");
      }
    } else {
      console.log("Nenhum usuário cadastrado encontrado");
      navigate("/register");
    }
  };
  return (
    <main className="bg-custom-bg w-screen h-screen flex items-center justify-center">
      <div className="bg-white/5 flex flex-col items-center justify-center space-y-4 md:space-y-8 md:rounded-xl py-40 md:py-14 lg:py-8  w-screen md:w-3/5 lg:w-2/6 xl:w-1/4">
        <h1 className="text-teal-400 font-bold text-3xl md:text-5xl lg:text-4xl text-center">
          FRONTEND <br /> FUSION
        </h1>

        <form
          onSubmit={handleSubmit(login)}
          className="w-4/5 gap-5 lg:gap-4  flex flex-col items-center md:text-lg lg:text-base"
        >
          <div className="flex flex-col w-full">
            <Input
              type="email"
              text="E-mail"
              id="email"
              register={register("email")}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="flex flex-col w-full">
            <Input
              type="password"
              text="Senha"
              id="password"
              register={register("password")}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
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
