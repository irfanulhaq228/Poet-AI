import React, { useEffect, useState } from "react";
import History from "./History";
import CurrentChat from "./CurrentChat";

const Chatbot = () => {
  const [sideBar, setSideBar] = useState(true);
  useEffect(() => {
    document.title = "Poet AI - Chatbot";
  }, []);
  return (
    <div className="flex">
      <History sideBar={sideBar} setSideBar={setSideBar} />
      <CurrentChat sideBar={sideBar} setSideBar={setSideBar} />
    </div>
  );
};

export default Chatbot;
