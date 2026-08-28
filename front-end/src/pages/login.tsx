import { useState } from "react";
import Input from "../components/input";
import { Link } from "react-router";
import Button from "../components/Button";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  console.log(email);

  async function handleSubmmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (!email || !password) {
        setError("E-mail e senha são obrigatórios");
        return;
      }

      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 404) {
        setError("Usuário não encontrado");
        return;
      }

      if (response.status === 400) {
        setError("E-mail e senha são obrigatórios");
        return;
      }

      if (response.status === 401) {
        setError("Crendencias inválidas");
        return;
      }

      if (response.status === 500) {
        setError("Erro no servidor");
        return;
      }

      if (response.status === 200) {
        setError("");
        const data = await response.json();
        navigate("/");
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      return;
    }
  }

  return (
    <form
      className="flex h-screen items-center justify-center bg-[#161410]"
      onSubmit={handleSubmmit}
    >
      <div className="flex flex-col justify-center gap-2">
        <Link to="/">
          <img src="./logo.png" alt="" className="mb-1, mx-auto" />
        </Link>
        ;
        <div className="mb-3 flex flex-col gap-2">
          <Input
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <Input
            placeholder="Senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="text-left text-sm font-bold text-red-500">{error}</p>
        </div>
        <Button
          title="Login"
          className="mb-4"
          type="submit"
          variant={"default"}
        />
        <Link to="/register" className="w-full">
          <Button title="Não tenho uma conta" variant="outline" />
        </Link>
      </div>
    </form>
  );
};

export default Login;
