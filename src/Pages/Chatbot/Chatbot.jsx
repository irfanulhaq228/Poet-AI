import React, { useEffect, useState } from "react";
import History from "./History";
import CurrentChat from "./CurrentChat";

const Chatbot = () => {
  const [sideBar, setSideBar] = useState(false);
  useEffect(() => {
    document.title = "Poet AI - Chatbot";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex">
      <History sideBar={sideBar} setSideBar={setSideBar} />
      <CurrentChat sideBar={sideBar} setSideBar={setSideBar} />
    </div>
  );
};

export default Chatbot;
