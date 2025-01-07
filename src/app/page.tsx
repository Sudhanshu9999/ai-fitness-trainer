'use client';

import { useState } from 'react';
import FormSection from './components/FormSection';
import ErrorAlert from './components/ErrorAlert';
import PlanSection from './components/PlanSection';
import Loader from './components/Loader';

const Home = () => {
  const [goal, setGoal] = useState('');
  const [fitnessLevel, setFitnessLevel] = useState('');
  const [equipment, setEquipment] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [plan, setPlan] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!goal || !fitnessLevel || !age || !weight || !height) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    setIsLoading(true);
    setPlan(null);

    const res = await fetch('/api/generate-plan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ goal, fitnessLevel, equipment, age, weight, height }),
    });

    const data = await res.json();
    setPlan(data.plan);
    setIsLoading(false);
  };

  const handleCopy = () => {
    if (plan) {
      navigator.clipboard.writeText(plan);
      alert('Plan copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 flex justify-center items-center p-6">
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-center items-start gap-6">
        <FormSection 
          handleSubmit={handleSubmit} 
          setGoal={setGoal} 
          setFitnessLevel={setFitnessLevel} 
          setAge={setAge} 
          setWeight={setWeight} 
          setHeight={setHeight} 
          setEquipment={setEquipment} 
          goal={goal} 
          fitnessLevel={fitnessLevel} 
          age={age} 
          weight={weight} 
          height={height} 
          equipment={equipment}
        />

        {showError && <ErrorAlert />}

        {plan && <PlanSection plan={plan} handleCopy={handleCopy} />}
      </div>

      {isLoading && <Loader />}
    </div>
  );
};

export default Home;
