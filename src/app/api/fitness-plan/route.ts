import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Parse the incoming JSON body
  const { goal, fitnessLevel, equipment } = await request.json();

  // Static Logic to generate a fitness plan based on the inputs
  let plan = '';

  if (goal === 'lose-weight') {
    plan = 'Workout: 30 minutes of cardio, 20 minutes of strength training (bodyweight exercises).\n';
    plan += 'Diet: Low-calorie, high-protein meals, avoid processed foods.';
  } else if (goal === 'build-muscle') {
    plan = 'Workout: 4 days of strength training (e.g., squats, bench press).\n';
    plan += 'Diet: High-protein, moderate carbs, and healthy fats.';
  } else if (goal === 'improve-endurance') {
    plan = 'Workout: 3 days of long-duration cardio, 2 days of light strength training.\n';
    plan += 'Diet: Balanced diet with emphasis on carbs for energy.';
  }

  if (fitnessLevel === 'beginner') {
    plan += ' Adjustments: Start with lighter weights and low-intensity cardio.';
  } else if (fitnessLevel === 'intermediate') {
    plan += ' Adjustments: Incorporate more sets and higher weights.';
  } else if (fitnessLevel === 'advanced') {
    plan += ' Adjustments: Focus on heavy lifting and advanced techniques.';
  }

  if (equipment) {
    plan += `\nAvailable Equipment: ${equipment}`;
  }

  return NextResponse.json({ plan });
}
