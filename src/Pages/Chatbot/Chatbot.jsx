import React, { useEffect, useState } from "react";
import History from "./History";
import CurrentChat from "./CurrentChat";
// import { socket } from "../../socket/socket";

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { fn_getUserDataApi } from "../../api/api";

const Chatbot = () => {
  const navigate = useNavigate();
  const [sideBar, setSideBar] = useState(true);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const token = Cookies.get("Authorization");
  const fn_getUserData = async () => {
    const response = await fn_getUserDataApi(token);
    if (response?.status === 200) {
      setUserData(response?.data?.response);
      setLoading(false);
    } else {
      navigate("/sign-in");
    }
  };
  useEffect(() => {
    document.title = "Poet AI - Chatbot";
    window.scrollTo(0, 0);
    fn_getUserData();
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
  // ========================= socket ======================
  // const [isConnected, setIsConnected] = useState(socket.connected);
  // useEffect(() => {
  //   function onConnect() {
  //     setIsConnected(true);
  //   }

  //   function onDisconnect() {
  //     setIsConnected(false);
  //   }

  //   socket.on("connect", onConnect);
  //   socket.on("disconnect", onDisconnect);

  //   return () => {
  //     socket.off("connect", onConnect);
  //     socket.off("disconnect", onDisconnect);
  //   };
  // }, []);
  // if(isConnected){
  //   console.log("socket connected!")
  // }
  return (
    <div className="flex">
      <History sideBar={sideBar} setSideBar={setSideBar} userData={userData} />
      <CurrentChat sideBar={sideBar} setSideBar={setSideBar} token={token} />
    </div>
  );
};

export default Chatbot;
