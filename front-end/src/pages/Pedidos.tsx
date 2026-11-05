import { useState } from "react";

import CardPedido from "../components/CardPedido";

const Pedidos = () => {
  const [category, setCategory] = useState("Pendente");

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

  return (
    <div className="mx-auto w-full p-3 text-white md:w-[737px] md:px-0">
      {/* Categorias */}
      <div className="mx-auto w-full p-3 text-white md:w-[737px] md:px-0">
        <div className="mt-1 mb-2 flex gap-2 md:my-3">
          <div
            className={getCategotyClass("Pendente")}
            onClick={() => handleChangeCategory("Pendente")}
          >
            Pendente
          </div>

          <div
            className={getCategotyClass("Retirado")}
            onClick={() => handleChangeCategory("Retirado")}
          >
            Retirado
          </div>

          <div
            className={getCategotyClass("Cancelado")}
            onClick={() => handleChangeCategory("Cancelado")}
          >
            Cancelado
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-3 gap-3">
        <CardPedido id={2} name="Matheus" date="05/11/2026" orderTime="22:30" deliveredTime="23:00" total={124.75} />
      </div>
    </div>
  );
};

export default Pedidos;
