import { ShoppingBag } from "lucide-react";

const Product = () => {
  return (
    <div className="">
      <div className="flex gap-2">
        <img
          src="./duplo da casa.png"
          className="h-[83px] w-[100px] md:h-[166px] md:w-[200px]"
        />

        <div className="flex flex-col">
          <p className="mg:text-lg text-sm font-bold uppercase">
            Duplo da Casa
          </p>
          <p className="md:text-md flex-1 text-xs text-[#848484]">
            Dois suculentos hambúrgueres de 120g, queijo cheddar derretido,
            maionese da casa e picles no pão brioche tostado.
          </p>
          <div className="flex items-center justify-end gap-2">
            <p className="text-sm text-[#F2DAAC]">R$28,90</p>
            <ShoppingBag size={18} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
