import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import { FaArrowLeft } from "react-icons/fa6";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { ColorRing } from "react-loader-spinner";

const History = ({
  sideBar,
  setSideBar,
  userData,
  token,
  history,
  selectedHistory,
  setSelectedHistory,
  fn_getChatHistoryById,
  loaderHistory,
  setLoaderHistory,
  setMessages,
  setOutputOccurs
}) => {
  const navigate = useNavigate();
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
      <div className="h-[70px] min-h-[70px] flex gap-3 items-center ps-3 font-[700] text-[19px] text-[var(--sec-color)] border-b border-b-[var(--sec-color)]">
        <div className="h-9 w-9 rounded-full shadow-md outline outline-1 outline-[var(--sec-color)] bg-gray-200 flex justify-center items-center pt-1">
          <span className="text-[15px] font-[700] uppercase">
            {userData?.first_name?.slice(0, 1)}
            {userData?.last_name?.slice(0, 1)}
          </span>
        </div>
        <p className="flex flex-col">
          <span className="capitalize">
            {userData?.first_name} {userData?.last_name}
          </span>
          <span className="text-[10px] text-green-700 flex items-center gap-1">
            <GoDotFill /> Online
          </span>
        </p>
      </div>
      <div className="px-3 h-[80vh] overflow-y-auto pt-4">
        <div className="flex flex-col gap-1.5 font-[700] text-[15px]">
          <p
            className={`px-3 h-[32px] rounded-md flex items-center text-[var(--sec-color)] cursor-pointer hover:outline outline-1 ${
              selectedHistory === 0
                ? "bg-[var(--sec-color-blur)]"
                : "bg-transparent"
            }`}
            onClick={() => {
              setSelectedHistory(0);
              setMessages([]);
              setOutputOccurs(false);
            }}
          >
            New Chat
          </p>
          {history?.map((item, index) => (
            <p
              key={index}
              className={`relative px-3 h-[32px] rounded-md flex justify-between items-center text-[var(--sec-color)] cursor-pointer hover:outline outline-1 ${
                selectedHistory === item.id
                  ? "bg-[var(--sec-color-blur)]"
                  : "bg-transparent"
              }`}
              onClick={() => {
                fn_getChatHistoryById(item.id);
                setLoaderHistory(item?.id);
              }}
            >
              {item?.text}
              {loaderHistory === item?.id && (
                <ColorRing
                  visible={true}
                  height="25"
                  width="25"
                  ariaLabel="color-ring-loading"
                  wrapperClass="color-ring-wrapper"
                  colors={[
                    "rgb(112, 62, 120)",
                    "rgb(112, 62, 120)",
                    "rgb(112, 62, 120)",
                    "rgb(112, 62, 120)",
                    "rgb(112, 62, 120)",
                  ]}
                />
              )}
            </p>
          ))}
        </div>
      </div>
      <div className="min-h-[65px] absolute w-full bottom-0 flex items-center justify-center">
        <p
          className="flex items-center justify-center py-1.5 px-5 rounded-md font-[600] text-[17px] bg-[var(--sec-color)] cursor-pointer text-[white]"
          onClick={() => {
            navigate("/sign-in");
            Cookies.remove("Authorization");
          }}
        >
          <RiLogoutBoxLine />
          &nbsp; Logout
        </p>
      </div>
    </div>
  );
};

export default History;
