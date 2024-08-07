import React, { useEffect, useRef, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { BiSend } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";
import { FaShareAlt, FaRegCopy } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const CurrentChat = ({
  sideBar,
  setSideBar,
  token,
  historyMessages,
  setMessages,
  messages,
  outputOccurs,
  setOutputOccurs,
}) => {
  const navigate = useNavigate();
  const newToken = token.substring(7);
  const containerRef = useRef(null);
  const clientRef = useRef(null);
  const [voice, setVoice] = useState(false);
  const [text, setText] = useState("");
  const [loader, setLoader] = useState(false);
  const [copyText, setCopyText] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  // ========================================= voice recognization

  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const startListening = () => {
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
  };

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  useEffect(() => {
    setText(transcript);
  }, [transcript]);

  const handleVoiceClick = () => {
    if (!voice) {
      startListening();
    } else {
      SpeechRecognition.stopListening();
    }
    setVoice(!voice);
  };

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

  // ========================================= web socket

  useEffect(() => {
    const client = new W3CWebSocket(
      `wss://cvs2rd7n-8000.inc1.devtunnels.ms/ws/socket-server/${newToken}/`
    );
    clientRef.current = client;

    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };

    client.onmessage = (message) => {
      console.log("Received:", message.data);
      if (!JSON.parse(message?.data).type) {
        setOutputOccurs(true);
        setText("");
        setLoader(false);
        const test = message?.data?.split("/n");
        console.log(test);
        setMessages((prevMessages) => [
          ...prevMessages,
          JSON.parse(message.data),
        ]);
      }
    };

    client.onclose = () => {
      console.log("WebSocket Client Disconnected");
    };

    client.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };

    return () => {
      client.close();
    };
  }, [newToken]);

  const fn_submit = (e) => {
    e.preventDefault();
    const message = {
      query: text,
    };
    setVoice(false);
    setLoader(true);
    SpeechRecognition.stopListening();
    if (clientRef.current && clientRef.current.readyState === WebSocket.OPEN) {
      clientRef.current.send(JSON.stringify(message));
    } else {
      console.log("Nothing");
    }
    resetTranscript();
  };

  // ========================================= history messages

  useEffect(() => {
    if (historyMessages === null) {
      console.log("Not Selected Any History");
    } else if (historyMessages?.length === 0) {
      setMessages([]);
    } else {
      const result = [];
      let obj = {};
      for (let i = 0; i < historyMessages.length; i++) {
        let item = historyMessages[i];
        if (!obj.input) {
          obj.input = item.content;
        } else if (!obj.result) {
          obj.result = item.content;
        }

        if (obj.input && obj.result) {
          result.push(obj);
          obj = {};
        }
      }
      if (obj.input || obj.result) {
        result.push(obj);
      }
      setOutputOccurs(true);
      setMessages(result);
    }
  }, [historyMessages]);

  return (
    <div
      className={`flex-1 bg-gray-200 min-h-[100vh] transition-all items-center duration-500 flex flex-col ${
        sideBar ? "lg:ms-[250px]" : "ms-0"
      }`}
    >
      <p className="h-[70px] min-h-[65px] w-full flex items-center ps-3 font-[800] text-[26px] text-[var(--sec-color)] border-b border-b-gray-400 shadow-xl bg-white gap-5 justify-center">
        {!sideBar && (
          <button
            className="absolute left-5 bg-[var(--sec-color)] w-8 h-8 rounded-full flex items-center justify-center shadow-md text-white hover:scale-[1.05] active:scale-[0.9]"
            onClick={() => setSideBar(true)}
          >
            <FaArrowRight className="text-[16px]" />
          </button>
        )}
        Poet AI
        <select className="absolute right-1 sm:right-5 top-[6.5vh] sm:top-auto text-[12px] text-black font-[500] focus:outline-none border border-[var(--sec-color)] rounded-[3px] h-[25px]" onChange={(e) => {
          if(e.target.value === "Urdu"){
            navigate("/urdu-poetry")
          }
        }}>
          <option disabled selected className="p-1">
            Select Language
          </option>
          <option className="p-1">
            Urdu
          </option>
          <option className="p-1">Roman</option>
        </select>
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
          </div>
        )}
        {/* output */}
        {outputOccurs && (
          <div
            ref={containerRef}
            className="h-[71vh] overflow-y-auto sm:ps-5 sm:w-full flex flex-col items-center"
          >
            {outputOccurs &&
              messages?.map((item, index) => (
                <div
                  key={index}
                  className="flex bg-[var(--main-color-blur)] rounded-xl flex-col p-3 w-full sm:w-[95%] md:w-[700px] xl:w-[850px] mt-[24px] text-[15px]"
                >
                  {/* input */}
                  <div className="bg-[var(--main-color)] rounded-xl p-3">
                    <p className="text-[17px] font-[600]">Profile</p>
                    {item?.input}
                  </div>
                  {/* output */}
                  <p className="text-[17px] font-[600] my-2">Poet Ai</p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify(item?.result).replace(
                        /\\n/g,
                        "<br>"
                      ),
                    }}
                  />
                  <p className="flex justify-end gap-2">
                    <CopyToClipboard
                      text={item?.result}
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
                      onClick={() => handleShare(item?.result)}
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
                onClick={handleVoiceClick}
                title="Speak"
              />
            ) : (
              <MdKeyboardVoice
                className="h-6 w-6 text-[var(--sec-color)] cursor-pointer"
                onClick={handleVoiceClick}
              />
            )}
            {!loader ? (
              <button
                type="submit"
                className="your-button-class"
                onClick={(e) => fn_submit(e)}
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
