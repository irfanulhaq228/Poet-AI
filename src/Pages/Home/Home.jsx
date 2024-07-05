import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { ThreeDots } from "react-loader-spinner";

import Navbar from "../../Components/Navbar";
import Testimonials from "./Testimonials";
import Slider from "../../Components/Slider";
import Sidebar from "../../Components/Sidebar";

import { GoArrowUpRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [tokenAvaiable, setTokenAvailable] = useState(false);
  const token = Cookies.get("Authorization");
  useEffect(() => {
    document.title = "Poet AI - Home";
    window.scrollTo(0, 0);
    setTimeout(() => {
      if (token) {
        setTokenAvailable(true);
        setLoading(false);
      } else {
        setTokenAvailable(false);
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
    <div>
      <Navbar tokenAvaiable={tokenAvaiable} />
      <Slider />
      <div className="bg-white flex justify-center items-center px-5 py-14 sm:p-14 md:p-24 lg:p-32">
        <div className="w-full bg-black p-4 sm:p-10 rounded-[10px] flex flex-col gap-6 items-center justify-center">
          <p className="text-[20px] sm:text-[30px] font-[600] text-center md:w-[520px] text-white">
            Instant answers. Greater productivity. Endless inspiration.
          </p>
          <button
            className="bg-white rounded-full px-6 h-[40px] text-[15px] font-[600] cursor-pointer flex items-center justify-center gap-2"
            onClick={() => navigate("/chat-bot")}
          >
            Try Poet Ai <GoArrowUpRight />
          </button>
        </div>
      </div>
      <Testimonials />
      <Sidebar />
    </div>
  );
};

export default Home;
