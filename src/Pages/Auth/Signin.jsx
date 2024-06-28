import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

import svg from "../../assets/svgs/auth-svg.svg";
import { signinSchema } from "../../schema/schema";
import { fn_signinApi } from "../../api/api";
import { ThreeDots } from "react-loader-spinner";

const Signin = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [loading, setLoading] = useState(true);
  const token = Cookies.get("auth");

  const initialValues = {
    email: "",
    password: "",
  };

  useEffect(() => {
    document.title = "Poet AI - Signin";
    window.scrollTo(0, 0);
    setTimeout(() => {
      if (token) {
        navigate("/chat-bot");
      } else {
        setLoading(false);
      }
    }, 1000);
  }, []);

  const Formik = useFormik({
    initialValues,
    validationSchema: signinSchema,
    onSubmit: async (values) => {
      setLoader(true);
      const response = await fn_signinApi(values);
      if (response?.status === 200) {
        toast.success("Login Successfull");
        Cookies.set("auth", response?.data?.response?.token, { expires: 7 });
        return navigate("/chat-bot");
      } else {
        setLoader(false);
        toast.error(
          response?.data?.message ? response?.data?.message : "Server Error"
        );
      }
    },
  });

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
              onSubmit={Formik.handleSubmit}
            >
              <div className="flex flex-col font-[500] gap-1">
                <label className="text-[14px]">Email</label>
                <input
                  className="input"
                  name="email"
                  value={Formik.values.email}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
                {Formik.touched.email && Formik.errors.email && (
                  <p className="text-red-500 text-[12px] mt-[-3px]">
                    {Formik.errors.email}
                  </p>
                )}
              </div>
              <div className="flex flex-col font-[500] gap-1">
                <label className="text-[14px]">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  value={Formik.values.password}
                  onChange={Formik.handleChange}
                  onBlur={Formik.handleBlur}
                />
                {Formik.touched.password && Formik.errors.password && (
                  <p className="text-red-500 text-[12px] mt-[-3px]">
                    {Formik.errors.password}
                  </p>
                )}
              </div>
              {!loader ? (
                <input
                  type="submit"
                  className="bg-[var(--main-color)] h-[40px] rounded-[8px] font-[600] text-[15px] cursor-pointer mt-2"
                />
              ) : (
                <button
                  className="bg-gray-300 h-[40px] rounded-[8px] font-[600] text-[15px] mt-2 cursor-not-allowed"
                  disabled
                >
                  Loading...
                </button>
              )}
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
