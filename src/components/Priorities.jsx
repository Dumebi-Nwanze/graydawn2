import { FaCheck } from "react-icons/fa";

function Priorities({ title, content }) {
  return (
    <div className="flex space-x-4 items-start justify-start mb-8">
      <div className="block">
        <div className="bg-[#0047B3] mt-1 p-1 rounded-lg inline-block">
          <FaCheck className="font-semibold text-[#61C0BF] " />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-lg  text-[#61C0BF]">Client Success</h3>
        <p className="text-sm text-[#333]">
          Our Clients&apos; Success Is At The Forefront Of Everything We Do. We
          Prioritize Understanding Their Unique Needs, Challenges, And Goals To
          Deliver Tailored Solutions That Address Their Specific Requirements.
        </p>
      </div>
    </div>
  );
}

export default Priorities;
