import React, { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { BiSend } from "react-icons/bi";
import { FaShareAlt, FaRegCopy } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { ColorRing } from "react-loader-spinner";

import { UrduPoetryData } from "../../assets/data";
import { toast } from "react-toastify";

const CurrentChat = () => {
  const containerRef = useRef(null);
  const [text, setText] = useState("");
  const [loader, setLoader] = useState(false);
  const [copyText, setCopyText] = useState(false);
  const [output, setOutput] = useState([]);
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [output]);

  // ========================================= share and copy output

  useEffect(() => {
    if (copyText === true) {
      setTimeout(() => {
        setCopyText(false);
      }, 1000);
    }
  }, [copyText]);

  const handleShare = (result) => {
    const message = `Poet Ai: ${result}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  // ========================================= submit

  const fn_submit = (e) => {
    e.preventDefault();
    setLoader(false)
    if (text === "") return toast.error("Write any thing");
    const data = UrduPoetryData?.filter((item) => item?.mood == text);
    if (data.length === 0) {
      return toast.error("No items found for the given mood");
    }
    if (output?.length === 0) {
      setShowOutput(true);
    }
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomItem = data[randomIndex];
    setOutput((prev) => [...prev, { ...randomItem }]);
    setText("");
  };

  console.log(output);

  return (
    <div
      className={`flex-1 bg-gray-200 min-h-[100vh] transition-all items-center duration-500 flex flex-col ms-0`}
    >
      <p className="h-[70px] min-h-[65px] w-full flex items-center ps-3 font-[800] text-[26px] text-[var(--sec-color)] border-b border-b-gray-400 shadow-xl bg-white gap-5 justify-center">
        Poet AI
      </p>
      <div className="flex-1 flex flex-col justify-between w-full items-center">
        {/* Suggestions */}
        {!showOutput && (
          <div className="flex flex-col p-3 gap-5 overflow-y-auto h-[71vh] w-[95%] md:w-[700px] xl:w-[850px] mt-[24px]">
            <p className="text-center font-[600] text-[18px]">Suggestions</p>
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-col gap-1.5">
                <p
                  className="bg-[var(--main-color-blur)] text-center w-[300px] sm:w-[400px] px-3 py-2 sm:p-2 rounded-full cursor-pointer"
                  onClick={() => setText("Inspirational")}
                >
                  Inspirational
                </p>
                <p
                  className="bg-[var(--main-color-blur)] text-center w-[300px] sm:w-[400px] px-3 py-2 sm:p-2 rounded-full cursor-pointer"
                  onClick={() => setText("Philosophical")}
                >
                  Philosophical
                </p>
                <p
                  className="bg-[var(--main-color-blur)] text-center w-[300px] sm:w-[400px] px-3 py-2 sm:p-2 rounded-full cursor-pointer"
                  onClick={() => setText("Nationalistic")}
                >
                  Nationalistic
                </p>
                <p
                  className="bg-[var(--main-color-blur)] text-center w-[300px] sm:w-[400px] px-3 py-2 sm:p-2 rounded-full cursor-pointer"
                  onClick={() => setText("Reflective")}
                >
                  Reflective
                </p>
                <p
                  className="bg-[var(--main-color-blur)] text-center w-[300px] sm:w-[400px] px-3 py-2 sm:p-2 rounded-full cursor-pointer"
                  onClick={() => setText("Patriotic")}
                >
                  Patriotic
                </p>
                <p
                  className="bg-[var(--main-color-blur)] text-center w-[300px] sm:w-[400px] px-3 py-2 sm:p-2 rounded-full cursor-pointer"
                  onClick={() => setText("Spiritual")}
                >
                  Spiritual
                </p>
                <p
                  className="bg-[var(--main-color-blur)] text-center w-[300px] sm:w-[400px] px-3 py-2 sm:p-2 rounded-full cursor-pointer"
                  onClick={() => setText("Empowering")}
                >
                  Empowering
                </p>
              </div>
            </div>
          </div>
        )}
        {/* output */}
        {showOutput && (
          <div
            ref={containerRef}
            className="h-[71vh] overflow-y-auto sm:ps-5 sm:w-full flex flex-col items-center"
          >
            {showOutput &&
              output?.map((item, index) => (
                <div
                  key={index}
                  className="flex bg-[var(--main-color-blur)] rounded-xl flex-col p-3 w-full sm:w-[95%] md:w-[700px] xl:w-[850px] mt-[24px] text-[15px]"
                >
                  {/* input */}
                  <div className="bg-[var(--main-color)] rounded-xl p-3">
                    <p className="text-[17px] font-[600]">Profile</p>
                    {item?.mood}
                  </div>
                  {/* output */}
                  <p className="text-[17px] font-[600] my-2">Poet Ai</p>
                  <p className="text-end mb-2">{item?.poetry}</p>
                  <p className="flex justify-end gap-2">
                    <CopyToClipboard
                      text={item?.poetry}
                      onCopy={() => setCopyText(true)}
                    >
                      {!copyText ? (
                        <FaRegCopy
                          className="cursor-pointer"
                          title="Copy output"
                        />
                      ) : (
                        <FaCheck
                          className="cursor-pointer"
                          title="Copy output"
                        />
                      )}
                    </CopyToClipboard>
                    <FaShareAlt
                      className="cursor-pointer"
                      title="Share output"
                      onClick={() => handleShare(item?.poetry)}
                    />
                  </p>
                </div>
              ))}
          </div>
        )}
        {/* inputs */}
        <div className="h-[15vh] flex justify-center w-full md:w-[700px] xl:w-[850px] flex-col gap-1.5">
          <form className="sm:mx-3 rounded-full px-5 h-[43px] flex items-center bg-white border-[2.5px] border-[var(--main-color)] gap-3">
            <input
              className="focus:outline-none text-[14px] font-[500] flex-1 w-auto"
              placeholder={`Welcome to AI-Poet. How may i assist you in exploring the poetic masterpiece?`}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            {!loader ? (
              <button
                type="submit"
                className="your-button-class"
                onClick={(e) => {
                  setLoader(true);
                  setTimeout(() => {
                    fn_submit(e)
                  }, 1000)
                }}
              >
                <BiSend className="h-6 w-6 text-[var(--sec-color)] cursor-pointer" />
              </button>
            ) : (
              <button
                type="submit"
                disabled
                className="your-button-class cursor-not-allowed"
              >
                <ColorRing
                  visible={true}
                  height="30"
                  width="30"
                  ariaLabel="color-ring-loading"
                  wrapperStyle={{}}
                  wrapperClass="color-ring-wrapper"
                  colors={[
                    "rgb(221, 180, 228)",
                    "rgb(221, 180, 228)",
                    "rgb(221, 180, 228)",
                    "rgb(221, 180, 228)",
                    "rgb(221, 180, 228)",
                  ]}
                />
              </button>
            )}
          </form>
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
