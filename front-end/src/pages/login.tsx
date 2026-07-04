import { useState } from "react";
import Input from "../components/input";
import { Link } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email);

  function handleSubmmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(email);
    console.log(password);
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
        ;
        <Input
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full cursor-pointer rounded-md bg-[#C92A0E] py-1 text-sm text-white">
          Login {/* ACHO Q ESTA FALTANDO O ONCLIK AQUI CONFERERIR DEPOIS */}
        </button>
        {/* <button className="w-full cursor-pointer rounded-md bg-[#ffff] py-1 text-sm text-[#C92A0E]">
          Não tenho uma conta
        </button> */}
      </div>
    </form>
  );
};

export default Login;
