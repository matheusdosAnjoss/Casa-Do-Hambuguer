import { useState } from "react";
import Input from "../components/input";
import { Link } from "react-router";
import Button from "../components/Button";

const Register = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confimerSenha, setCorfimeSenha] = useState("");
  const [cep, setCep] = useState("");

  function handleSubmmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(nome, email, senha, confimerSenha, cep);
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmmit}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Link to="/">
          <img src="./logo.png" alt="" className="mb-4" />
        </Link>

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

        <Button title={"Cria Conta"} variant={"default"}/>

        <Button title={"Já tenho uma conta"} variant={"outline"}/>
  
      </div>
    </form>
  );
};

export default Register;
