import { Link } from "react-router";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import {
  LogOut,
  ShoppingCartPlus,
  Box,
  LayoutDashboard,
  Plus,
} from "lucide-react";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-[737px] md:p-0">
        <img src="./logo.png" alt="" />

        {user ? (
          <div className="flex items-center gap-8 text-white">
            
            <div className="flex items-center gap-3 text-[#F2DAAC]">
              <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-md border">
                <Box />
              </div>

              <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-md border">
                <LayoutDashboard />
              </div>

              <div className="flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded-md border">
                <Plus />
              </div>
            </div>

            <div className="relative cursor-pointer">
              <ShoppingCartPlus size={18} />
              <p className="absolute -top-4 -right-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#F2DAAC] p-1 text-[#161410]">
                1
              </p>
            </div>

            <div className="flex items-center gap-2">
              <p>Olá, {user.name}</p>
              <LogOut size={18} className="cursor-pointer" />
            </div>
          </div>
        ) : (
          <Link to="/login">
            <button className="h-[35px] w-[130px] cursor-pointer rounded-[10px] bg-[#F2DAAC]">
              Entra
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
