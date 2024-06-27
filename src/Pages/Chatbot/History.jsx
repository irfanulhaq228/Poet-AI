import React, { useState } from "react";

import { FaArrowLeft } from "react-icons/fa6";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

const History = ({ sideBar, setSideBar }) => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(12);
  const fn_changeTab = (number) => {
    if (selectedTab === number) return;
    setSelectedTab(number);
  };
  return (
    <div
      className={`w-[250px] bg-[var(--main-color)] min-h-[100vh] absolute transition-all duration-500 shadow-xl ${
        sideBar ? "start-0" : "start-[-250px]"
      }`}
    >
      <button
        className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-md absolute end-3 top-4 text-[var(--sec-color)] hover:scale-[1.05] active:scale-[0.9]"
        onClick={() => setSideBar(false)}
      >
        <FaArrowLeft />
      </button>
      <div className="h-[10vh] min-h-[65px] flex gap-3 items-center ps-3 font-[700] text-[19px] text-[var(--sec-color)] border-b border-b-[var(--sec-color)]">
        <div className="h-9 w-9 rounded-full shadow-md outline outline-1 outline-[var(--sec-color)] bg-gray-200 flex justify-center items-center">
          <span className="text-[15px] font-[700]">JD</span>
        </div>
        <p className="flex flex-col">
          <span>John Due</span>
          <span className="text-[10px] text-green-700 flex items-center gap-1">
            <GoDotFill /> Online
          </span>
        </p>
      </div>
      <div className="px-3 h-[80vh] overflow-y-auto">
        <p className="text-[14px] font-[700] px-3 text-gray-500 pt-5 pb-2">
          Today
        </p>
        <div className="flex flex-col gap-1.5 font-[700] text-[15px]">
          <p
            className={`px-3 h-[32px] rounded-md flex items-center text-[var(--sec-color)] cursor-pointer hover:outline outline-1 ${
              selectedTab === 12
                ? "bg-[var(--sec-color-blur)]"
                : "bg-transparent"
            }`}
            onClick={() => fn_changeTab(12)}
          >
            Chat 12
          </p>
          <p
            className={`px-3 h-[32px] rounded-md flex items-center text-[var(--sec-color)] cursor-pointer hover:outline outline-1 ${
              selectedTab === 11
                ? "bg-[var(--sec-color-blur)]"
                : "bg-transparent"
            }`}
            onClick={() => fn_changeTab(11)}
          >
            Chat 11
          </p>
          <p
            className={`px-3 h-[32px] rounded-md flex items-center text-[var(--sec-color)] cursor-pointer hover:outline outline-1 ${
              selectedTab === 10
                ? "bg-[var(--sec-color-blur)]"
                : "bg-transparent"
            }`}
            onClick={() => fn_changeTab(10)}
          >
            Chat 10
          </p>
        </div>
        <p className="text-[14px] font-[700] px-3 text-gray-500 pt-5 pb-2">
          Yesterday
        </p>
        <div className="flex flex-col gap-1.5 font-[700] text-[15px]">
          <p
            className={`px-3 h-[32px] rounded-md flex items-center text-[var(--sec-color)] cursor-pointer hover:outline outline-1 ${
              selectedTab === 9
                ? "bg-[var(--sec-color-blur)]"
                : "bg-transparent"
            }`}
            onClick={() => fn_changeTab(9)}
          >
            Chat 9
          </p>
          <p
            className={`px-3 h-[32px] rounded-md flex items-center text-[var(--sec-color)] cursor-pointer hover:outline outline-1 ${
              selectedTab === 8
                ? "bg-[var(--sec-color-blur)]"
                : "bg-transparent"
            }`}
            onClick={() => fn_changeTab(8)}
          >
            Chat 8
          </p>
          <p
            className={`px-3 h-[32px] rounded-md flex items-center text-[var(--sec-color)] cursor-pointer hover:outline outline-1 ${
              selectedTab === 7
                ? "bg-[var(--sec-color-blur)]"
                : "bg-transparent"
            }`}
            onClick={() => fn_changeTab(7)}
          >
            Chat 7
          </p>
          <p
            className={`px-3 h-[32px] rounded-md flex items-center text-[var(--sec-color)] cursor-pointer hover:outline outline-1 ${
              selectedTab === 6
                ? "bg-[var(--sec-color-blur)]"
                : "bg-transparent"
            }`}
            onClick={() => fn_changeTab(6)}
          >
            Chat 6
          </p>
          <p
            className={`px-3 h-[32px] rounded-md flex items-center text-[var(--sec-color)] cursor-pointer hover:outline outline-1 ${
              selectedTab === 5
                ? "bg-[var(--sec-color-blur)]"
                : "bg-transparent"
            }`}
            onClick={() => fn_changeTab(5)}
          >
            Chat 5
          </p>
          <p
            className={`px-3 h-[32px] rounded-md flex items-center text-[var(--sec-color)] cursor-pointer hover:outline outline-1 ${
              selectedTab === 4
                ? "bg-[var(--sec-color-blur)]"
                : "bg-transparent"
            }`}
            onClick={() => fn_changeTab(4)}
          >
            Chat 4
          </p>
          <p
            className={`px-3 h-[32px] rounded-md flex items-center text-[var(--sec-color)] cursor-pointer hover:outline outline-1 ${
              selectedTab === 3
                ? "bg-[var(--sec-color-blur)]"
                : "bg-transparent"
            }`}
            onClick={() => fn_changeTab(3)}
          >
            Chat 3
          </p>
          <p
            className={`px-3 h-[32px] rounded-md flex items-center text-[var(--sec-color)] cursor-pointer hover:outline outline-1 ${
              selectedTab === 2
                ? "bg-[var(--sec-color-blur)]"
                : "bg-transparent"
            }`}
            onClick={() => fn_changeTab(2)}
          >
            Chat 2
          </p>
          <p
            className={`px-3 h-[32px] rounded-md flex items-center text-[var(--sec-color)] cursor-pointer hover:outline outline-1 ${
              selectedTab === 1
                ? "bg-[var(--sec-color-blur)]"
                : "bg-transparent"
            }`}
            onClick={() => fn_changeTab(1)}
          >
            Chat 1
          </p>
        </div>
      </div>
      <div className="min-h-[65px] absolute w-full bottom-0 flex items-center justify-center">
        <p
          className="flex items-center justify-center py-1.5 px-5 rounded-md font-[600] text-[17px] bg-[var(--sec-color)] cursor-pointer text-[white]"
          onClick={() => navigate("/sign-in")}
        >
          <RiLogoutBoxLine />
          &nbsp; Logout
        </p>
      </div>
    </div>
  );
};

export default History;
