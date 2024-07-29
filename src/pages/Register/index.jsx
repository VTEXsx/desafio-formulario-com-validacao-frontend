import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import BtnSubmit from "../../components/BtnSubmit";
import Input from "../../components/Input";
import OptionSelect from "../../components/OptionSelect";

const signUpSchema = z.object({
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
    password: 
    z.string().min(6, { message: "Senha deve ter pelo menos 6 caracteres" }),
    confirmPassword: 
    z.string().min(6, { message: "Confirmar senha deve ter pelo menos 6 caracteres" }),
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
    localStorage.setItem("formData", JSON.stringify(data));
    navigate("/");
  };

  return (
    <main className="bg-custom-bg">
      <div className="bg-white/10 border-[1px] border-white/15 w-full h-full flex flex-col items-center justify-center space-y-4 py-10">
        <h1 className="text-teal-400 font-bold text-3xl text-center">
          FRONTEND <br /> FUSION
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-5 px-4 flex flex-col items-center"
        >
          <div className="flex flex-col w-full">
            <Input tipo="text" text="Nome" ids="name" register={register("name")} />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <div className="flex flex-col w-full">
            <Input
              tipo="email"
              text="E-mail"
              ids="email"
              register={register("email")}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="flex flex-col w-full">
            <Input
              tipo="tel"
              text="Telefone"
              ids="phone"
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
              className="px-3 py-2 border-[1px] border-white/30 rounded-md w-full"
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
          <div className="flex flex-col w-full">
            <Input
              tipo="password"
              text="Senha"
              ids="password"
              register={register("password")}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
          <div className="flex flex-col w-full">
            <Input
              tipo="password"
              text="Confirmar senha"
              ids="confirmPassword"
              register={register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div className="flex flex-col w-full">
            <Input
              tipo="text"
              text="LinkedIn (opcional)"
              ids="linkedin"
              register={register("linkedin")}
            />
          </div>
          <div className="flex flex-col w-full">
            <Input
              tipo="text"
              text="GitHub (opcional)"
              ids="gitHub"
              register={register("gitHub")}
            />
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
