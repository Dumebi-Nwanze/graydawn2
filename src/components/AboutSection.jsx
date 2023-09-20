/* eslint-disable no-unused-vars */
import Priorities from "../components/Priorities";
import SolutionsCard from "../components/SolutionsCard";
import { HiCheckBadge } from "react-icons/hi2";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

function AboutSection() {
  const [text, count] = useTypewriter({
    words: [
      "Include Satisying Our Clients.",
      "Revolve Around Ensuring The Success of Our Clients.",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="py-8 mt-4">
      <div className="pb-8  ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          variants={{
            visible: { x: 0, opacity: 1, scale: 1 },
            hidden: { x: -300, opacity: 0, scale: 0 },
          }}
          className="grid grid-cols-3 gap-4 px-28"
        >
          <SolutionsCard icon={<HiCheckBadge />} heading={"h"} content={"hg"} />
          <SolutionsCard icon={<HiCheckBadge />} heading={"h"} content={"hg"} />
          <SolutionsCard icon={<HiCheckBadge />} heading={"h"} content={"hg"} />
        </motion.div>
        <div className="flex mt-16 px-24 space-x-12 overflow-hidden">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: -300, opacity: 0 },
            }}
            className="flex-1"
          >
            <img
              src="https://ascentree.org/ascentree/img/about.jpeg"
              alt=""
              className="w-full rounded-sm"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: 300, opacity: 0 },
            }}
            className="flex-1 flex flex-col "
          >
            <div className="block mb-4">
              <p className="text-white text-xs font-semibold bg-[#007BFF] p-2 rounded-full inline-block">
                Our Priorities
              </p>
            </div>
            <div className="h-20">
              <h2 className="text-2xl font-bold text-[#007BFF]">
                Our Priorities{" "}
                <span className="mr-3 text-2xl font-bold text-[#0047B3]">
                  {text}
                </span>
                <Cursor />
              </h2>
            </div>
            <div className="flex flex-col">
              <Priorities />
              <Priorities />
              <Priorities />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex ">
        <div className="flex-1 flex flex-col space-y-20 px-8 overflow-hidden">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { y: 0, opacity: 1 },
              hidden: { y: -100, opacity: 0 },
            }}
            className="text-3xl font-bold text-[#007BFF]"
          >
            About Us
          </motion.h1>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            variants={{
              visible: { x: 0, opacity: 1 },
              hidden: { x: 300, opacity: 0 },
            }}
            className="flex flex-col space-y-5"
          >
            <h2 className="text-4xl font-bold text-[#007BFF]">
              Africa’s Leading Technology and Business Consultancy Firm
            </h2>
            <p className="text-[#333]">
              With our extensive expertise and a team of highly skilled
              professionals, we are dedicated to driving innovation,
              transformation, and growth for businesses across the continent.
            </p>
            <button className="cta_btn w-[180px] text-white">Learn More</button>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: -300, opacity: 0 },
          }}
          className="flex-1 p-8"
        >
          <img
            src="https://ascentree.org/ascentree/img/about-us.jpg"
            alt=""
            className="w-full rounded-sm transition-all duration-200 ease-in-out hover:scale-105"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default AboutSection;
