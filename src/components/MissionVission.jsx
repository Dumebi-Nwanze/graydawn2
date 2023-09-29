import React from "react";

function MissionVission() {
  return (
    <div id="mission-vision" className="px-4 mb-20 lg:p-20 flex flex-col lg:flex-row space-y-10 lg:space-x-10 lg:space-y-0">
      <div
        style={{
          backgroundImage: "url('/assets/direction.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "0% 75%",
        }}
        className="flex-1 min-h-[250px]"
      ></div>
      <div className="flex-[2]">
        <div id="values" className="mb-4">
          <h2 className="text-3xl font-extralight text-[#007BFF] mb-4">
            Our Values
          </h2>
          <p className="text-sm">
          As an organization, we are driven by a possibility mindset and a novelty philosophy of ‘Believing I’m-possible,’ knowing everything our mind perceives can be actualized. For that which is coined out of the reason of thought can be achieved, mixed with drive and determination for success.
          </p>
          <br />
          <ul className="marker:text-green text-sm list-disc ml-12 decoration-slate-900">
            <li className="text-[#007BFF]">
              {" "}
              <div className="text-black">
              Customer focus: Treating our clientele as the backbone, core and lifeline of the business
              </div>
            </li>
            <li className="text-[#007BFF]">
              {" "}
              <div className="text-black">
              Innovation: Believing I'm-possible, knowing everything our mind perceives can be made a reality
              </div>
            </li>
            <li className="text-[#007BFF]">
              {" "}
              <div className="text-black">
              Collaboration: A dedication to leveraging relationships and partnerships that foster innovation. 
              </div>
            </li>
            <li className="text-[#007BFF]">
              {" "}
              <div className="text-black">
              Transparency: We value transparency as a cornerstone of strong relationships and effective collaboration
              </div>
            </li>
            <li className="text-[#007BFF]">
              {" "}
              <div className="text-black">
              Agility: To be proactive by the keeping on toes, realizing the competition is always striving to be better
              </div>
            </li>
            <li className="text-[#007BFF]">
              {" "}
              <div className="text-black">
              Inclusive: Creating open access to opportunities by providing Digital Services to everyone, everywhere, and at all times
              </div>
            </li>
          </ul>
        </div>
        <div className="mb-2">
          <h2 className="text-3xl font-extralight text-[#007BFF] mb-4">
            Our Mission
          </h2>
          <p className="text-sm">
          Our mission is building bridges using Software Platforms and Internet-Connected Technology to Connect People to People, People to Places and People to Services
          </p>
          <br />
          
         
        </div>
        <div>
          <h2 className="text-3xl font-extralight text-[#007BFF] mb-4">
            Our Vision
          </h2>
          <p className="text-sm">
            Our Vision is to Serve as a bridge connecting Virtual and Physical Reality, achieving reduced human exertions and enhancing user experiences using Internet of Things (IoT). 
          </p>
        </div>
      </div>
    </div>
  );
}

export default MissionVission;
