import React from "react";

import { Carousel } from "antd";

import img1 from "../assets/imgs/img_1.jpg";
import img2 from "../assets/imgs/img_2.jpg";
import img3 from "../assets/imgs/img_3.jpg";
import img4 from "../assets/imgs/img_4.jpg";

const Slider = () => {
  return (
    <div className="relative">
      <Carousel autoplay>
        <div>
          <img
            alt=""
            src={img1}
            className="object-cover object-left-bottom h-[400px] w-full"
          />
        </div>
        <div>
          <img
            alt=""
            src={img2}
            className="object-cover object-left-bottom h-[400px] w-full"
          />
        </div>
        <div>
          <img
            alt=""
            src={img3}
            className="object-cover object-left-bottom h-[400px] w-full"
          />
        </div>
        <div>
          <img
            alt=""
            src={img4}
            className="object-cover object-left-bottom h-[400px] w-full"
          />
        </div>
      </Carousel>
      <div className="bg-[#0000006b] w-full h-[400px] absolute left-0 top-0 flex items-center justify-center">
        <div className="bg-[#ffffff81] w-[95%] sm:w-[500px] rounded-[10px] p-5">
          <p className="text-center text-[17px] sm:text-[23px] font-[700]">
            Be innovative Poet by Writing poetry from Poet Ai
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider;
