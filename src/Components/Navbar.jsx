import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/imgs/Poet-Ai-Logo.jpg";

import { GoArrowUpRight } from "react-icons/go";

const Navbar = ({ tokenAvaiable }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white h-[70px] border-b border-[var(--sec-color)] flex px-3 sm:px-10 items-center justify-between shadow-md">
      <div className="flex items-center gap-3">
        <img src={logo} alt="" className="h-[60px] w-[60px]" />
        <p className="text-[17px] font-[700] text-[var(--sec-color)]">
          Poet Ai
        </p>
      </div>
      <div>
        {!tokenAvaiable ? (
          <button
            className="bg-[var(--main-color)] text-[var(--sec-color)] w-[90px] text-[15px] font-[700] rounded-full h-[33px] hover:outline outline-[var(--sec-color)] outline-1 hover:scale-[1.05] transition-all duration-500"
            onClick={() => navigate("/sign-in")}
          >
            Login
          </button>
        ) : (
          <button
            className="bg-[var(--main-color)] text-[var(--sec-color)] text-[15px] font-[700] rounded-full h-[33px] hover:outline outline-[var(--sec-color)] outline-1 hover:scale-[1.05] transition-all duration-500 flex items-center gap-2 px-2 sm:px-3"
            onClick={() => navigate("/chat-bot")}
          >
            Try Poet Ai <GoArrowUpRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
