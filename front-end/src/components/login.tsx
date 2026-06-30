import Input from "./input";

const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#161410]">
      <div className="flex flex-col items-center justify-center gap-2 bg-white">
        <img src="./logo.png" alt="" />
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
      </div>
    </div>
  );
};

export default Login;
