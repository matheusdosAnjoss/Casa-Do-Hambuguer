// import Header from "../components/Header";

import { Hamburger } from "lucide-react";
import { useState } from "react";

const Home = () => {
  const [category, setCategory] = useState("Hamburguer");

  const handleChangeCategory = (nweCategory: string) => {
    setCategory(nweCategory);
  };

  const getCategotyClass = (categoryName: string) => {
    const elementoSelecionado =
      "text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border-1 border-[#F2DAAC] bg-[#F2DAAC] text-sm font-bold text-[#161410] md:h-9 md:w-32";

    const elementosNaoSelecionados =
      "text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border-1 border-[#F2DAAC] bg-[#161410] text-sm font-bold text-[#F2DAAC] hover:bg-[#F2DAAC] hover:text-[#161410] md:h-9 md:w-32";

    if (category == categoryName) {
      return elementoSelecionado;
    } else {
      return elementosNaoSelecionados;
    }
  };

  console.log(category);

  return (
    <div className="mx-auto w-full p-3 text-white md:w-[737px] md:px-0">
      <div className="my-1 flex gap-2 md:my-3">
        <div
          className={getCategotyClass("Hamburguer")}
          onClick={() => handleChangeCategory("Hamburguer")}
        >
          Hamburguer
        </div>

        <div
          className={getCategotyClass("Bebidas")}
          onClick={() => handleChangeCategory("Bebidas")}
        >
          Bebidas
        </div>

        <div
          className={getCategotyClass("Porções")}
          onClick={() => handleChangeCategory("Porções")}
        >
          Porções
        </div>
      </div>
    </div>
  );
};

export default Home;
