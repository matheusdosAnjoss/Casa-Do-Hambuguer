import Input from "./components/input";

const App = () => {
  return (
    <p className="flex gap-2 bg-[#161410] p-6">
      <Input placeholder="E-mail" type="text"/>
      <Input placeholder="Senha" type="password"/>
    </p>
  );
};

export default App;
