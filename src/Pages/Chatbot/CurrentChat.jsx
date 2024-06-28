import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { BiSend } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";
import { FaShareAlt, FaRegCopy } from "react-icons/fa";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { ThreeDots } from "react-loader-spinner";

const CurrentChat = ({ sideBar, setSideBar }) => {
  const [voice, setVoice] = useState(false);
  const [text, setText] = useState("");
  const [outputOccurs, setOutputOccurs] = useState(false);
  const [loader, setLoader] = useState(false);
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  useEffect(() => {
    setText(transcript);
  }, [transcript]);

  useEffect(() => {
    if (loader === true) {
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    }
  }, [loader]);

  const fn_submit = (e) => {
    e.preventDefault();
    console.log(text);
    setText("");
    setVoice(false);
    setOutputOccurs(true);
    setLoader(true);
  };

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
        {/* Suggestions */}
        {!outputOccurs && (
          <div className="flex flex-col p-3 gap-5 overflow-y-auto h-[71vh] w-[95%] md:w-[700px] xl:w-[850px] mt-[24px]">
            <p className="text-center font-[600] text-[18px]">Suggestions</p>
            <div className="flex flex-col items-center gap-2">
              <p className="font-[500]">Thematic Poetry</p>
              <div className="flex flex-col gap-1.5">
                <p
                  className="bg-[var(--main-color-blur)] text-center w-[300px] sm:w-[400px] px-3 py-2 sm:p-2 rounded-full cursor-pointer"
                  onClick={() => setText("Poetic Suggestion for 14 August")}
                >
                  Poetic Suggestion for 14 August
                </p>
                <p
                  className="bg-[var(--main-color-blur)] text-center w-[300px] sm:w-[400px] px-3 py-2 sm:p-2 rounded-full cursor-pointer"
                  onClick={() =>
                    setText("Revolutionary Poetry for Election Speech")
                  }
                >
                  Revolutionary Poetry for Election Speech
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="font-[500]">Ambiance</p>
              <div className="flex flex-col gap-1.5">
                <p
                  className="bg-[var(--main-color-blur)] text-center w-[300px] sm:w-[400px] px-3 py-2 sm:p-2 rounded-full cursor-pointer"
                  onClick={() => setText("Romantic Poetry")}
                >
                  Romantic Poetry
                </p>
                <p
                  className="bg-[var(--main-color-blur)] text-center w-[300px] sm:w-[400px] px-3 py-2 sm:p-2 rounded-full cursor-pointer"
                  onClick={() => setText("Sad Poetry")}
                >
                  Sad Poetry
                </p>
                <p
                  className="bg-[var(--main-color-blur)] text-center w-[300px] sm:w-[400px] px-3 py-2 sm:p-2 rounded-full cursor-pointer"
                  onClick={() => setText("Emotional Poetry")}
                >
                  Emotional Poetry
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="font-[500]">Multilengual Support</p>
              <div className="flex flex-col gap-1.5">
                <p className="bg-[var(--main-color-blur)] text-center w-[300px] sm:w-[400px] px-3 py-2 sm:p-2 rounded-full">
                  Romantic Poetry
                </p>
                <p className="bg-[var(--main-color-blur)] text-center w-[300px] sm:w-[400px] px-3 py-2 sm:p-2 rounded-full">
                  Sad Poetry
                </p>
                <p className="bg-[var(--main-color-blur)] text-center w-[300px] sm:w-[400px] px-3 py-2 sm:p-2 rounded-full">
                  Emotional Poetry
                </p>
              </div>
            </div>
          </div>
        )}
        {/* output */}
        {outputOccurs && (
          <div className="flex bg-[var(--main-color-blur)] rounded-xl flex-col p-3 overflow-y-auto h-[71vh] w-[95%] md:w-[700px] xl:w-[850px] mt-[24px] text-[15px]">
            {/* input */}
            <p className="bg-[var(--main-color)] rounded-xl p-3">
              <p className="text-[17px] font-[600]">Input</p>A paragraph is
              defined as “a group of sentences or a single sentence that forms a
              unit” (Lunsford and Connors 116). Length and appearance do not
              determine whether a section in a paper is a paragraph. For
              instance, in some styles of writing, particularly journalistic
              styles, a paragraph can be just one sentence long.
            </p>
            {/* output */}
            {loader ? (
              <div className="flex justify-center mt-1">
                <ThreeDots
                  visible={true}
                  height="80"
                  width="80"
                  color="rgb(112, 62, 120)"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            ) : (
              <>
                <p className="text-[17px] font-[600] my-2">Output</p>A paragraph
                is defined as “a group of sentences or a single sentence that
                forms a unit” (Lunsford and Connors 116). Length and appearance
                do not determine whether a section in a paper is a paragraph.
                For instance, in some styles of writing, particularly
                journalistic styles, a paragraph can be just one sentence long.
                A paragraph is defined as “a group of sentences or a single
                sentence that forms a unit” (Lunsford and Connors 116). Length
                and appearance do not determine whether a section in a paper is
                a paragraph. For instance, in some styles of writing,
                particularly journalistic styles, a paragraph can be just one
                sentence long. A paragraph is defined as “a group of sentences
                or a single sentence that forms a unit” (Lunsford and Connors
                116). Length and appearance do not determine whether a section
                in a paper is a paragraph. For instance, in some styles of
                writing, particularly journalistic styles, a paragraph can be
                just one sentence long. A paragraph is defined as “a group of
                sentences or a single sentence that forms a unit” (Lunsford and
                Connors 116).
                <p className="flex justify-end gap-2">
                  <FaRegCopy className="cursor-pointer" title="Copy output" />
                  <FaShareAlt className="cursor-pointer" title="Share output" />
                </p>
                <p></p>
              </>
            )}
          </div>
        )}
        {/* inputs */}
        <div className="h-[15vh] flex justify-center w-full md:w-[700px] xl:w-[850px] flex-col gap-1.5">
          <form className="mx-3 rounded-full px-5 h-[43px] flex items-center bg-white border-[2.5px] border-[var(--main-color)] gap-3">
            <input
              className="focus:outline-none text-[14px] font-[500] flex-1"
              placeholder={
                !voice
                  ? `Welcome to AI-Poet. How may i assist you in exploring the poetic masterpiece?`
                  : `Start Speeking...`
              }
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            {!voice ? (
              <MdKeyboardVoice
                className={"h-6 w-6 text-gray-300 cursor-pointer"}
                onClick={() => {
                  startListening();
                  setVoice(!voice);
                }}
                title="Speak"
              />
            ) : (
              <MdKeyboardVoice
                className="h-6 w-6 text-[var(--sec-color)] cursor-pointer"
                onClick={() => {
                  SpeechRecognition.stopListening();
                  setVoice(!voice);
                }}
              />
            )}
            <button
              type="submit"
              className="your-button-class"
              onClick={(e) => fn_submit(e)}
            >
              <BiSend className="h-6 w-6 text-[var(--sec-color)] cursor-pointer" />
            </button>
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
