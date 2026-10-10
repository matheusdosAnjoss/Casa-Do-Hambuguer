// import Header from "../components/Header";

const Home = () => {
  return (
    <div className="mx-auto w-full p-3 text-white md:w-[737px] md:px-0">
      <div className="my-1 flex gap-2 md:my-3">
        <div className="text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border-1 border-[#F2DAAC] bg-[#F2DAAC] text-sm font-bold text-[#161410] md:h-9 md:w-32">
          Hamburguer
        </div>

        <div className="text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border-1 border-[#F2DAAC] bg-[#161410] text-sm font-bold text-[#F2DAAC] hover:bg-[#F2DAAC] hover:text-[#161410] md:h-9 md:w-32">
          Bebidas
        </div>

        <div className="text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border-1 border-[#F2DAAC] bg-[#161410#F2DAAC] text-sm font-bold text-[#F2DAAC] hover:bg-[#F2DAAC] hover:text-[#161410] md:h-9 md:w-32">
          Porções
        </div>
      </div>
    </div>
  );
};

export default Home;
