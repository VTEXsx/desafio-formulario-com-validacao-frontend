import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import BtnSubmit from "../../components/BtnSubmit";
import Input from "../../components/Input";
import OptionSelect from "../../components/OptionSelect";

const signUpSchema = z
  .object({
    name: z.string().min(5, { message: "Nome completo é obrigatório" }),
    email: z.string().email({ message: "E-mail inválido" }),
    phone: z.string().min(1, { message: "Telefone é obrigatório" }),
    role: z.enum(
      [
        "Desenvolvedor Frontend",
        "Desenvolvedor Backend",
        "Desenvolvedor Full Stack",
        "Desenvolvedor Mobile",
        "Desenvolvedor de Software",
        "Engenheiro de Software",
        "Arquiteto de Software",
        "UI/UX Designer",
        "Analista de Sistemas",
        "Analista Programador",
        "DevOps Engineer",
        "Engenheiro de Dados",
        "QA Engineer",
        "Scrum Master",
        "Product Owner",
      ],
      { message: "Cargo pretendido é obrigatório" }
    ),
    password: z
      .string()
      .min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
    linkedin: z.string().optional(),
    gitHub: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não conferem",
    path: ["confirmPassword"],
  });

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });
  const onSubmit = (data) => {
    console.log(`Cadastro realizado com sucesso! ${data}`);
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/");
  };

  return (
    <main className="bg-custom-bg w-screen md:h-screen flex items-center justify-center">
      <div className="bg-white/5 flex flex-col items-center justify-center space-y-4 md:space-y-8 w-screen md:h-screen py-16">
        <h1 className="text-teal-400 font-bold text-3xl md:text-5xl lg:text-4xl text-center">
          FRONTEND <br /> FUSION
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-[90%] lg:w-3/5 xl:w-2/5 px-6 md:px-10  lg:px-6 flex flex-col items-center md:text-lg lg:text-base gap-5 lg:gap-4"
        >
          <div className="flex flex-col w-full gap-5 md:flex-row">
            <div className="w-full">
              <Input
                type="text"
                text="Nome"
                id="name"
                register={register("name")}
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div className="w-full">
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
          </div>
          <div className="flex flex-col w-full gap-5 md:flex-row">
            <div className="w-full">
              <Input
                type="tel"
                text="Telefone"
                id="phone"
                register={register("phone")}
              />
              {errors.phone && (
                <span className="text-red-500">{errors.phone.message}</span>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white/50 font-bold mb-2">
                Cargo pretendido
              </label>
              <select
                {...register("role")}
                className="px-2 lg:py-1.5 py-2.5 rounded-md w-full"
              >
                <option value="">Selecione</option>
                <OptionSelect value="Desenvolvedor Frontend" />
                <OptionSelect value="Desenvolvedor Backend" />
                <OptionSelect value="Desenvolvedor Full Stack" />
                <OptionSelect value="Desenvolvedor Mobile" />
                <OptionSelect value="Desenvolvedor de Software" />
                <OptionSelect value="Engenheiro de Software" />
                <OptionSelect value="Arquiteto de Software" />
                <OptionSelect value="UI/UX Designer" />
                <OptionSelect value="Analista de Sistemas" />
                <OptionSelect value="Analista Programador" />
                <OptionSelect value="DevOps Engineer" />
                <OptionSelect value="Engenheiro de Dados" />
                <OptionSelect value="QA Engineer" />
                <OptionSelect value="Scrum Master" />
                <OptionSelect value="Product Owner" />
              </select>
              {errors.role && (
                <span className="text-red-500">{errors.role.message}</span>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full gap-5 md:flex-row">
            <div className="w-full">
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
            <div className="w-full">
              <Input
                type="password"
                text="Confirmar senha"
                id="confirmPassword"
                register={register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <span className="text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full gap-5 md:flex-row">
            <div className="w-full">
              <Input
                type="text"
                text="LinkedIn (opcional)"
                id="linkedin"
                register={register("linkedin")}
              />
            </div>
            <div className="w-full">
              <Input
                type="text"
                text="GitHub (opcional)"
                id="gitHub"
                register={register("gitHub")}
              />
            </div>
          </div>
          <BtnSubmit>Cadastre-se</BtnSubmit>
          <p className="text-white">
            Já tem uma conta?{" "}
            <Link className="text-teal-500" to="/">
              Entrar
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}

export default Register;
