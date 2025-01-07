import { ClipboardIcon } from '@heroicons/react/outline'; // Heroicons v1

interface PlanSectionProps {
  plan: string;
  handleCopy: () => void;
}

const PlanSection = ({ plan, handleCopy }: PlanSectionProps) => (
  <div className="w-full md:w-1/2 max-w-3xl bg-white p-10 rounded-2xl shadow-xl relative flex flex-col">
    <button
      onClick={handleCopy}
      className="absolute top-4 right-4 p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
      title="Copy Plan"
    >
      <ClipboardIcon className="w-5 h-5" />
    </button>
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Personalized Plan</h2>
    <pre className="whitespace-pre-wrap text-gray-700 h-60 md:h-auto overflow-auto">{plan}</pre>
  </div>
);

export default PlanSection;
