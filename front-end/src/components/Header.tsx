import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-[737px] md:p-0">
        <img src="./logo.png" alt="" />

        <Link to="/login">
          {user ? (
            <p className="text-white">Olá, {user.name}</p>
          ) : (
            <button className="h-[35px] w-[130px] cursor-pointer rounded-[10px] bg-[#F2DAAC]">
              Entra
            </button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Header;
