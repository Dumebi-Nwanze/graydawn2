import React from "react";
import { overviewTilesData, overviewStats } from "../data";

function OverviewMain() {
  return (
    <div id="company" className="min-h-screen min-w-full overflow-hidden ">
      <div
        style={{
          backgroundImage: "url('/assets/light-bulb.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full h-[90vh] relative"
      >

        <div className="absolute h-full w-full bg-black opacity-40">
          
        </div>
        <div className="absolute h-full w-full p-8 min-w-full min-h-full flex flex-col items-end justify-center pt-80 text-white space-y-4">
          <h1 className="block text-3xl lg:text-7xl font-bold text-right">
            Ideate. Innovate. Create.
          </h1>
          <h3 className="block text-right text-lg lg:text-2xl font-light">
            Our principles define over 20+ large scale successful projects delivered. Discover how our 50+ strong team can ideate, innovate and create a difference for your business.
          </h3>
          {/* <h4 className="block text-sm lg:text-xl font-light">
            Discover how our 525+ strong team can ideate, innovate and create a
            difference for your business
          </h4> */}
        </div>
      </div>
      <div className="px-4 lg:px-20 py-8 flex flex-col items-center text-center spacce-y-8">
        <h2 className="text-4xl font-extralight mb-4">About Us</h2>
        <p className="text-lg font-light">
        Masters of skill with an “I’M-Possible” Mindset and a network of Doers with a mission of connecting the world across diversity of tongues, skin color and cultures.
        </p>
        <div>
          <img src="/assets/team.jpg" alt="Team" className="w-[85vw] my-10" />
        </div>
        <p>
        We provide high quality & cost effective solutions that help businesses leverage Information Technology. We improve your competitive advantage through transformative solutions based on these three tenets, ‘Ideate. Innovate. Create’. We help transform businesses and organizations while delivering Digital Innovation, Product Innovation, and Modernisation at business speed.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
          {overviewTilesData.map((itm) => (
            <div className=" h-[350px] lglg:h-[500px] lg:w-[350px] border-[#007BFF] border-t-2 flex flex-col items-center py-20 space-y-4">
              <h2 className="text-3xl font-light text-[#007BFF]">
                {itm.title}
              </h2>
              <h3 className="text-lg font-extralight">{itm.subtitle}</h3>
              <p className="text-sm">{itm.content}</p>
            </div>
          ))}
        </div>
        <div className=" py-10 px-4 lg:px-20 w-full">
          {overviewStats.map((itm) => (
            <div className="flex justify-between p-4 mb-2 text-white bg-[#007BFF] rounded-lg ">
              <p className="font-semibold text-left">{itm.stat}</p>
              <p className="">{itm.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OverviewMain;
