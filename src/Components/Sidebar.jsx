import React from "react";

import logo from "../assets/imgs/Poet-Ai-Logo-removebg.png";

const Sidebar = () => {
  return (
    <div className="bg-[var(--sec-color)] flex flex-col items-center justify-center py-7">
      <img src={logo} alt="" className="w-[150px] mb-5 bg-[white] rounded-full" />
      <p className="text-[23px] font-[700] text-white">Poet Ai</p>
      <p className="text-gray-200 font-[500] text-[14px] mt-3 flex items-center gap-1">
        <span className="text-[16px]">©</span> All Rights Reserved
      </p>
    </div>
  );
};

export default Sidebar;
