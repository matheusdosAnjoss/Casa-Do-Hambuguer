import { useState } from "react";
import { UserRound, Calendar, Clock4 } from "lucide-react";

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
        <div className="rounded-md bg-[#F2DAAC] p-2 text-[#161410]">
          <div className="flex justify-between">
            <p>#1</p>
            <select name="" id="" className="font-bold">
              <option value="" defaultChecked disabled>
                Pendente
              </option>
              <option value="">Retirado</option>
              <option value="">Cancelado</option>
            </select>
          </div>

          <div className="mt-2 flex-col gap-2">
            <div className="flex items-center gap-2">
              <UserRound size={16} />
              <p className="text-xs">Jocimara</p>
            </div>

            <div className="mt-2">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <p className="text-xs">27/10/2026</p>
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex items-center gap-2">
              <Clock4 size={16} />
              <p className="text-xs">22:35</p>
            </div>

            <div className="flex items-center gap-2">
              <Clock4 size={16} />
              <p className="text-xs">22:35</p>
            </div>
          </div>

          <div className="h-[2px] w-full mt-2 bg-[#161410e8]"></div>

          <p className="text-right font-bold">R$124,00</p>

        </div>
        
      </div>
    </div>
  );
};

export default Pedidos;
