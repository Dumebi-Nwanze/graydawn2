import { HiEnvelope } from "react-icons/hi2";

function SolutionsCard({ icon, heading, content }) {
  return (
    <div className="min-h-[200px] flex flex-col items-center p-2 bg-[#0047B3] space-y-2 rounded-lg shadow-2xl shadow-[#0047B3] text-center">
      <HiEnvelope className="text-3xl text-white" />
      <h2 className="font-bold  text-[#61C0BF]">Information Technology</h2>
      <p className="text-sm text-white">
        A Leading Provider Of Comprehensive IT Services, Helping Organisations
        Leverage The Power Of Technology To Drive Growth, Enhance Productivity,
        And Stay Ahead In Today&#39;s Digital Age.
      </p>
    </div>
  );
}

export default SolutionsCard;
