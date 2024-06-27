import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { BiSend } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";

const CurrentChat = ({ sideBar, setSideBar }) => {
  return (
    <div
      className={`flex-1 bg-gray-200 min-h-[100vh] transition-all items-center duration-500 flex flex-col ${
        sideBar ? "lg:ms-[250px]" : "ms-0"
      }`}
    >
      <p className="h-[10vh] min-h-[65px] w-full flex items-center ps-3 font-[800] text-[26px] text-[var(--sec-color)] border-b border-b-gray-400 shadow-xl bg-white gap-5 justify-center">
        {!sideBar && (
          <button
            className="absolute left-5 bg-[var(--sec-color)] w-8 h-8 rounded-full flex items-center justify-center shadow-md text-white hover:scale-[1.05] active:scale-[0.9]"
            onClick={() => setSideBar(true)}
          >
            <FaArrowRight className="text-[16px]" />
          </button>
        )}
        Poet AI
      </p>
      <div className="flex-1 flex flex-col justify-between w-full items-center">
        <div className="flex flex-col p-3 gap-5 overflow-y-auto h-[71vh] w-[95%] md:w-[700px] xl:w-[850px] mt-[24px]">
          <p className="text-center font-[600] text-[18px]">Suggestions</p>
          <div className="flex flex-col items-center gap-2">
            <p className="font-[500]">Thematic Poetry</p>
            <div className="flex flex-col gap-1.5">
              <p className="bg-[var(--main-color-blur)] text-center w-[400px] p-2 rounded-full">Poetic Suggestion for 14 August</p>
              <p className="bg-[var(--main-color-blur)] text-center w-[400px] p-2 rounded-full">Revolutionary Poetry for Election Speech</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="font-[500]">Ambiance</p>
            <div className="flex flex-col gap-1.5">
              <p className="bg-[var(--main-color-blur)] text-center w-[400px] p-2 rounded-full">Romantic Poetry</p>
              <p className="bg-[var(--main-color-blur)] text-center w-[400px] p-2 rounded-full">Sad Poetry</p>
              <p className="bg-[var(--main-color-blur)] text-center w-[400px] p-2 rounded-full">Emotional Poetry</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="font-[500]">Multilengual Support</p>
            <div className="flex flex-col gap-1.5">
              <p className="bg-[var(--main-color-blur)] text-center w-[400px] p-2 rounded-full">Romantic Poetry</p>
              <p className="bg-[var(--main-color-blur)] text-center w-[400px] p-2 rounded-full">Sad Poetry</p>
              <p className="bg-[var(--main-color-blur)] text-center w-[400px] p-2 rounded-full">Emotional Poetry</p>
            </div>
          </div>
        </div>
        <div className="h-[15vh] flex justify-center w-full md:w-[700px] xl:w-[850px] flex-col gap-1.5">
          <div className="mx-3 rounded-full px-5 h-[43px] flex items-center bg-white border-[2.5px] border-[var(--main-color)] gap-3">
            <input
              className="focus:outline-none text-[14px] font-[500] flex-1"
              placeholder="Welcome to AI-Poet. How may i assist you in exploring the poetic masterpiece?"
            />
            <MdKeyboardVoice className="h-6 w-6 text-gray-300 cursor-pointer" />
            <BiSend className="h-6 w-6 text-[var(--sec-color)] cursor-pointer" />
          </div>
          <p className="text-[13px] text-center px-5">
            An innovative AI-driven platform that crafts personalized poetry on
            demand
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentChat;
