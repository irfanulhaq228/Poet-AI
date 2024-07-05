import React, { useEffect, useState } from "react";
import History from "./History";
import CurrentChat from "./CurrentChat";

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import {
  fn_getChatHistoryByIdApi,
  fn_getHistoryApi,
  fn_getHistoryByIdApi,
  fn_getUserDataApi,
} from "../../api/api";

const Chatbot = () => {
  const navigate = useNavigate();
  const [sideBar, setSideBar] = useState(true);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const [history, setHistory] = useState([]);
  const [selectedHistory, setSelectedHistory] = useState(0);
  const [loaderHistory, setLoaderHistory] = useState(0);
  const [historyMessages, setHistoryMessages] = useState(null);
  const token = Cookies.get("Authorization");
  const [messages, setMessages] = useState([]);
  const [outputOccurs, setOutputOccurs] = useState(false);
  useEffect(() => {
    document.title = "Poet AI - Chatbot";
    window.scrollTo(0, 0);
    fn_getUserData();
    fn_getHistory();
  }, []);
  const fn_getUserData = async () => {
    try {
      const response = await fn_getUserDataApi(token);
      if (response?.status === 200) {
        setUserData(response?.data?.response);
        setLoading(false);
      } else {
        Cookies.remove("Authorization");
        navigate("/sign-in");
      }
    } catch (error) {
      Cookies.remove("Authorization");
      navigate("/sign-in");
    }
  };
  const fn_getHistory = async () => {
    try {
      const response = await fn_getHistoryApi(token);
      if (response?.status === 200) {
        const updatedData = await Promise.all(
          response?.data?.map(async (item) => {
            const res = await await fn_getHistoryByIdApi(token, item?.id);
            if (res?.status === 200) {
              if (res?.data?.messages?.length > 0) {
                return { ...item, text: res?.data?.messages[0] };
              } else {
                return { ...item, text: `Chat ${item?.id}` };
              }
            }
          })
        );
        setHistory(updatedData);
      }
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  };
  async function fn_getChatHistoryById(id) {
    const response = await fn_getChatHistoryByIdApi(token, id);
    console.log(response);
    if (response?.status === 200) {
      setLoaderHistory(0);
      setSelectedHistory(id);
      setHistoryMessages(response?.data);
    }
  }
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
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
    );
  }
  return (
    <div className="flex">
      <History
        sideBar={sideBar}
        setSideBar={setSideBar}
        userData={userData}
        token={token}
        history={history}
        selectedHistory={selectedHistory}
        setSelectedHistory={setSelectedHistory}
        fn_getChatHistoryById={fn_getChatHistoryById}
        loaderHistory={loaderHistory}
        setLoaderHistory={setLoaderHistory}
        setMessages={setMessages}
        setOutputOccurs={setOutputOccurs}
      />
      <CurrentChat
        sideBar={sideBar}
        setSideBar={setSideBar}
        token={token}
        fn_getHistory={fn_getHistory}
        historyMessages={historyMessages}
        messages={messages}
        setMessages={setMessages}
        outputOccurs={outputOccurs}
        setOutputOccurs={setOutputOccurs}
      />
    </div>
  );
};

export default Chatbot;
