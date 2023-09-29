/* eslint-disable no-unused-vars */
import Priorities from "../components/Priorities";
import SolutionsCard from "../components/SolutionsCard";
import { HiCheckBadge } from "react-icons/hi2";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { priorities, solutions } from "../data";

function AboutSection() {
  const [text, count] = useTypewriter({
    words: [
      "Involve Pioneering The Future, One Line Of Code At A Time",
      "Are Pushing The Envelope Of What’s Possible In The World Of Software",
      "Revolves Around Customer Satisfaction And Business Transformation",
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
            visible: { x: 0, opacity: 1 },
            hidden: { x: -300, opacity: 0 },
          }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-8 lg:px-28"
        >
          {
            solutions.map(itm => <SolutionsCard    key={itm} icon={itm.icon} heading={itm.heading} content={itm.body} />)
          }

        </motion.div>
        <div className="flex flex-col md:flex-row mt-16 p-8 lg:px-24 lg:space-x-12 overflow-hidden space-y-8 lg:space-y-0">
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
              src="/assets/team2.JPG"
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
            <div className="mt-14 flex flex-col">
              {
                priorities.map(itm => <Priorities title={itm.title} content={itm.body} />)
              }

            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
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
              Continental Leaders in Technological Possibilities and Business Scalability
            </h2>
            <p className="text-[#333]">
              We are a leading technology and business consultancy firm with extensive expertise, highly skilled professionals and an increasing network of technical partnerships, dedicated to driving innovation, transformation, and growth for businesses across various continents.
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
            src="/assets/team1.JPG"
            alt=""
            className="w-full rounded-sm transition-all duration-200 ease-in-out hover:scale-105"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default AboutSection;
