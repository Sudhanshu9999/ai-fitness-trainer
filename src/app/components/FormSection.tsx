import { Dispatch, SetStateAction } from 'react';

interface FormSectionProps {
  handleSubmit: (e: React.FormEvent) => void;
  setGoal: Dispatch<SetStateAction<string>>;
  setFitnessLevel: Dispatch<SetStateAction<string>>;
  setAge: Dispatch<SetStateAction<string>>;
  setWeight: Dispatch<SetStateAction<string>>;
  setHeight: Dispatch<SetStateAction<string>>;
  setEquipment: Dispatch<SetStateAction<string>>;
  goal: string;
  fitnessLevel: string;
  age: string;
  weight: string;
  height: string;
  equipment: string;
}

const FormSection = ({
  handleSubmit,
  setGoal,
  setFitnessLevel,
  setAge,
  setWeight,
  setHeight,
  setEquipment,
  goal,
  fitnessLevel,
  age,
  weight,
  height,
  equipment,
}: FormSectionProps) => {
  return (
    <div className="w-full md:w-1/2 max-w-3xl bg-white p-10 rounded-2xl shadow-xl relative">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
        AI Fitness Trainer
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Fitness Goal */}
        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">Your Fitness Goal</label>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-lg text-black placeholder-gray-500"
          >
            <option value="">Select Goal</option>
            <option value="lose-weight">Lose Weight</option>
            <option value="build-muscle">Build Muscle</option>
            <option value="improve-endurance">Improve Endurance</option>
          </select>
        </div>

        {/* Fitness Level */}
        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">Fitness Level</label>
          <select
            value={fitnessLevel}
            onChange={(e) => setFitnessLevel(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-lg text-black placeholder-gray-500"
          >
            <option value="">Select Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        {/* Age, Weight, and Height Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-700">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-lg text-black placeholder-gray-500"
              placeholder="Your Age"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-700">Weight (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-lg text-black placeholder-gray-500"
              placeholder="Your Weight"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-700">Height (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-lg text-black placeholder-gray-500"
              placeholder="Your Height"
            />
          </div>
        </div>

        {/* Available Equipment */}
        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">Available Equipment</label>
          <input
            type="text"
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-lg text-black placeholder-gray-500"
            placeholder="E.g., Dumbbells, Resistance Bands"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-4 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
        >
          Get My Fitness Plan
        </button>
      </form>
    </div>
  );
};

export default FormSection;
