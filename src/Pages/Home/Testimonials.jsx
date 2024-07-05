import React from "react";
import { Carousel } from "antd";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Testimonials() {
  return (
    <div className="px-2 sm:px-4 lg:px-10 bg-gray-100">
      <Carousel arrows infinite autoplay>
        <TestimonialBox
          name={"Dr. Ahmed Khan"}
          desc={"Renowned Iqbal Scholar"}
          content={
            "The AI-Poet project is a groundbreaking initiative that leverages the power of artificial intelligence to bring Allama Iqbal's profound poetry to a broader audience. This application not only preserves the essence of Iqbal’s literary legacy but also makes it accessible in multiple languages, thereby bridging cultural and linguistic gaps. I am particularly impressed with the project's dedication to maintaining the authenticity of Iqbal’s style through expert validation. It is a testament to how technology can be used to honor and propagate the wisdom of great poets like Iqbal."
          }
        />
        <TestimonialBox
          name={"Professor Sara Ali"}
          desc={"Iqbal Studies Department, University of Lahore"}
          content={
            "AI-Poet is an innovative and commendable project that holds the potential to revolutionize the way we interact with Iqbal’s poetry. By incorporating advanced NLP models and sentiment analysis, the application ensures that the generated poetry aligns closely with Iqbal’s original works and the emotional context of the user. This project is a perfect blend of technology and literature, and it provides a unique platform for users to explore and appreciate the depth of Iqbal's philosophical and poetic expressions."
          }
        />
        <TestimonialBox
          name={"Dr. Rehan Malik"}
          desc={"Author and Poet"}
          content={
            "The AI-Poet project is a marvelous example of how modern technology can be harnessed to preserve and promote classical literature. The ability of this AI to generate poetry in Iqbal’s style, while maintaining the thematic and emotional integrity of his work, is truly impressive. The project’s focus on multilingual support ensures that Iqbal’s poetry can be enjoyed by people around the world, regardless of language barriers. I look forward to seeing how this tool evolves and contributes to the ongoing appreciation of Iqbal’s timeless wisdom."
          }
        />
        <TestimonialBox
          name={"Professor Nadia Javed"}
          desc={"Iqbal Academy Pakistan"}
          content={
            "As an expert in Iqbal’s poetry, I am thrilled to see a project like AI-Poet come to fruition. The integration of voice assistance and user customization features shows a deep understanding of the need to make literary works more accessible and engaging. This application will undoubtedly play a significant role in promoting Iqbal’s poetry among younger generations and those new to his work. The collaboration with Iqbal scholars to validate the generated poetry ensures that the essence and authenticity of Iqbal’s message are preserved, which is crucial for maintaining the literary integrity of his works."
          }
        />
        <TestimonialBox
          name={"Dr. Farooq Ahmed"}
          desc={"Senior Lecturer, Persian and Urdu Literature"}
          content={
            "The AI-Poet project is a pioneering effort that successfully combines technology with literary scholarship. By enabling users to generate poetry in Iqbal’s style and incorporating sentiment analysis, this application offers a highly personalized and enriching experience. The project’s commitment to multilingual support and expert validation reflects a thorough and respectful approach to Iqbal’s poetry. It is an excellent example of how AI can be used to enhance our interaction with classical literature and ensure its relevance in the modern world."
          }
        />
      </Carousel>
    </div>
  );
}

const TestimonialBox = ({ name, desc, content }) => {
  return (
    <div className="py-20 px-5 flex flex-col justify-center items-center">
      <p className="text-center text-[19px] font-[700] capitalize">{name}</p>
      <p className="text-center text-[15px] font-[500] text-gray-500 mt-2">
        {desc}
      </p>
      <div className="flex gap-1 mt-5 md:w-[700px] px-1 sm:px-3 text-justify">
        <p className="text-[15px] text-center">
          <FaQuoteLeft className="text-[15px] mt-[-15px] inline-block" />
          &nbsp; {content} &nbsp;
          <FaQuoteRight className="text-[15px] inline-block mb-[-5px]" />
        </p>
      </div>
    </div>
  );
};
