import { Link } from "react-router";

const Header = () => {
  return (
    <div className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-[737px] md:p-0">
        <img src="./logo.png" alt="" />

        <Link to="/login">
          {" "}
          <button className="h-[35px] w-[130px] rounded-[10px] bg-[#F2DAAC] cursor-pointer">
            Entra
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
