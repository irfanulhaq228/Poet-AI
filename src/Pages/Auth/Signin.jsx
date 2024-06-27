import React, { useEffect } from "react";

import svg from "../../assets/svgs/auth-svg.svg";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Poet AI - Signin";
  }, []);
  const fn_submit = (e) => {
    e.preventDefault();
    navigate("/chat-bot");
  };
  return (
    <div className="auth-main">
      <div className="auth-content">
        <div className="auth-front w-[98%] sm:w-[95%] md:w-[90%] lg:w-[85%] xl:w-[1000px] flex flex-col md:flex-row">
          <div className="img flex-1 md:rounded-tl-[20px] md:rounded-bl-[20px] flex justify-center items-center">
            <img src={svg} className="object-cover" />
          </div>
          <div className="flex-1 py-7 flex flex-col justify-center">
            <p className="text-center w-[100%] text-[40px] font-[700]">
              Poet-AI
            </p>
            <p className="text-center w-[100%] text-[13px] font-[500] text-gray-400 mt-[-5px]">
              An innovative AI-driven platform that crafts personalized poetry
              on demand
            </p>
            <p className="text-center w-[100%] text-[30px] font-[600] mt-[30px]">
              Sign In Form
            </p>
            <form
              className="p-5 md:px-10 flex flex-col gap-3"
              onSubmit={(e) => fn_submit(e)}
            >
              <div className="flex flex-col font-[500] gap-1">
                <label className="text-[14px]">Email</label>
                <input className="input" />
              </div>
              <div className="flex flex-col font-[500] gap-1">
                <label className="text-[14px]">Password</label>
                <input className="input" type="password" />
              </div>
              <input
                type="submit"
                className="bg-[var(--main-color)] h-[40px] rounded-[8px] font-[600] text-[15px] cursor-pointer mt-2"
              />
            </form>
            <p className="text-center text-[15px] font-[500] mt-1">
              Don't have Account?{" "}
              <span
                className="text-[var(--sec-color)] font-[600] cursor-pointer hover:underline"
                onClick={() => navigate("/")}
              >
                Signup
              </span>{" "}
              Here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
