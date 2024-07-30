import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Home() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setName(user.name);
    }
  }, []);

  const handleLogout = () => {
    toast.success("Desconectado com sucesso! realize um novo login para acessar o sistema");
    navigate("/");
  };
  const handleDeleteAccount = () => {
    toast.success("Conta excluida com sucesso! realize um novo cadastro para acessar o sistema");
    localStorage.removeItem("user");
    navigate("/");
  }

  return (
    <main className="bg-custom-bg w-screen h-screen flex flex-col items-center justify-center gap-12">
      <h1 className="text-3xl text-white px-4 md:px-20 text-center font-bold">
        Bem-vindo ao Frontend Fusion, {name}!
      </h1>

      <div className="flex gap-5 text-base">
        <button
          onClick={handleLogout}
          className="bg-teal-500 hover:bg-teal-700 text-white/90 font-bold py-2 w-40 rounded-md "
        >
          Sair
        </button>
        <button
          onClick={handleDeleteAccount}
          className="bg-red-500 hover:bg-red-700 text-white/90 font-bold py-2 w-40 rounded-md "
        >
          Apagar conta
        </button>
      </div>
    </main>
  );
}

export default Home;
