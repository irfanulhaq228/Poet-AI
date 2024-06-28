import React, { useEffect, useState } from "react";
import History from "./History";
import CurrentChat from "./CurrentChat";

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const Chatbot = () => {
  const navigate = useNavigate();
  const [sideBar, setSideBar] = useState(true);
  const [loading, setLoading] = useState(true);
  const token = Cookies.get("auth");
  useEffect(() => {
    document.title = "Poet AI - Chatbot";
    window.scrollTo(0, 0);
    setTimeout(() => {
      if (token === undefined || token === null) {
        navigate("/sign-in");
      } else {
        setLoading(false);
      }
    }, 1000);
  }, []);
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
      <History sideBar={sideBar} setSideBar={setSideBar} />
      <CurrentChat sideBar={sideBar} setSideBar={setSideBar} />
    </div>
  );
};

export default Chatbot;
