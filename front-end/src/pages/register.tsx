import { useState } from "react";
import Input from "../components/input";
import { Link } from "react-router";
import Button from "../components/Button";

const Register = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cofirmSenha, setCorfimeSenha] = useState("");
  const [cep, setCep] = useState("");
  const [error, setError] = useState("");

  async function handleSubmmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (!nome || !email || !senha || !cep) {
        setError("Todas as informações são obrigatorias");
        return;
      }

      if (senha !== cofirmSenha) {
        setError("Senhas não confere!");
        return;
      }

      const response = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: nome, email, password: senha, cep }),
      });

      switch (response.status) {
        case 409:
          setError("Email já cadastrado");
          break;
        case 400:
          setError("E-mail e senha são obrigatórios.");
          break;
        case 201:
          // Sucesso - Você pode redirecionar para o login aqui
          setNome("");
          setEmail("");
          setSenha("");
          setCorfimeSenha("");
          setCep("");
          break;
        case 500:
          setError("Tente novamente mais tarde");
          break;
        default:
          setError("Erro inesperado no servidor.");
      }


      const data = await response.json();
      console.log(data);
      
    } catch (error) {
      console.log(error);
      return;
    }

    // console.log(nome, email, senha, confimerSenha, cep);
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmmit}
    >
      <div className="flex flex-col justify-center gap-2">
        <Link to="/">
          <img src="./logo.png" alt="" className="mx-auto mb-4" />
        </Link>

        <Input
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        />

        <Input
          placeholder="E-maill"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setSenha(e.target.value)}
          value={senha}
        />

        <Input
          placeholder="Confirme sua senha"
          type="password"
          onChange={(e) => setCorfimeSenha(e.target.value)}
          value={cofirmSenha}
        />

        <Input
          placeholder="CEP"
          type="text"
          onChange={(e) => setCep(e.target.value)}
          value={cep}
        />
        <p className="font-bold text-red-500">{error}</p>

        <div className="mt-3 flex w-full flex-col gap-2">
          <Button title={"Cria Conta"} variant={"default"} type="submit" />

          <Link to="/login" className="w-full">
            <Button title="Já tenho uma conta" variant="outline" />
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Register;
