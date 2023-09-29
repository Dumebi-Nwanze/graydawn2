import React from "react";
import { HiLink } from "react-icons/hi2";
import { management } from "../data";

function Managment() {
  return (
    <div id="management">
      <div
        style={{
          backgroundImage: "url('/assets/typing.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPositionY: "center",
        }}
        className="relative h-[45vh] w-full mb-10  text-white "
      >
        <div className="absolute top-0 h-[45vh] w-full bg-black opacity-80"></div>
        <div className="flex flex-col p-8 text-center items-center justify-center absolute top-0 w-full h-full z-20">
          <h2 className="text-3xl font-extralight mb-4">Management</h2>
          <p className="text-sm">
          We are masters of our craft, building bespoke software solutions that are Performant, Scalable, Convenient and Easily Accessible. We pride ourselves with keeping up with industry trends through continuous learning and development. Our team is built on a core of business/systems analysts, project managers, software architects and senior software developers, who have a combined 20 years experience designing and delivering high quality and complex software products.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-5 w-fit">
          {management.map((itm) => (
            <div className="flex flex-col items-center border border-[#61C0BF] rounded-lg p-8 max-w-[400px]">
              <div
                style={{
                  backgroundImage: `url(${itm.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="w-[200px] h-[200px] rounded-full group"
              >
                <div className="w-[200px] h-[200px] rounded-full bg-black hover:opacity-80 opacity-0  transition-all duration-300 cursor-pointer flex items-center justify-center ">
                  <HiLink className="text-white font-extrabold text-3xl" />
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-semibold text-xl my-2 text-[#0047B3]">
                  {itm.name}
                </h3>
                <p>{itm.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Managment;
