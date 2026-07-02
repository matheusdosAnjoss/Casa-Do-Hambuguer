import { useState } from "react";
import Input from "../components/input";

const Register = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confimerSenha, setCorfimeSenha] = useState("");
  const [cep, setCep] = useState("");

  function handleSubmmit(e: React.SubmitEvent<HTMLFormElement>) {
      e.preventDefault();
      
      console.log(nome, email, senha, confimerSenha, cep)
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmmit}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <img src="./logo.png" alt="" className="mb-4" />

        <Input placeholder="Nome" onChange={(e) => setNome(e.target.value)} />

        <Input
          placeholder="E-maill"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setSenha(e.target.value)}
        />

        <Input
          placeholder="Confirme sua senha"
          type="password"
          onChange={(e) => setCorfimeSenha(e.target.value)}
        />

        <Input
          placeholder="CEP"
          type="text"
          onChange={(e) => setCep(e.target.value)}
        />

        <button className="w-full cursor-pointer rounded-md bg-[#C92A0E] py-1 text-sm text-white">
          Criar conta
        </button>

        <button className="w-full cursor-pointer rounded-md bg-[#ffff] py-1 text-sm text-[#C92A0E]">
          Já tenho uma conta
        </button>
      </div>
    </form>
  );
};

export default Register;
