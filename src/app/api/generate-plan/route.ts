import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (!OPENAI_API_KEY) {
    console.error('API Key is missing');
    return NextResponse.json({ error: 'API key is missing' });
  }

  const { goal, fitnessLevel, equipment, age, weight, height } = await request.json();

  // Check if all required fields are present
  if (!goal || !fitnessLevel || !age || !weight || !height) {
    return NextResponse.json({ error: 'Please provide all fields (goal, fitness level, age, weight, height).' });
  }

  // Construct the prompt with the new fields (age, weight, height)
  const prompt = `
    Generate a personalized fitness plan based on the following information:
    - Goal: ${goal}
    - Fitness Level: ${fitnessLevel}
    - Available Equipment: ${equipment}
    - Age: ${age}
    - Weight: ${weight} lbs
    - Height: ${height} cm

    No need for your opening conversation statement.
    Please keep the plan brief and strictly fit within 300 tokens.
  `;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [
          { role: 'system', content: 'You are a fitness assistant.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 300,  // Limit the response to 300 tokens
        temperature: 0.7,
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // Handle the response from OpenAI
    const plan = response.data.choices[0].message.content.trim();
    return NextResponse.json({ plan });
  } catch (error: unknown) {
    // Type-casting the error as AxiosError
    if (axios.isAxiosError(error)) {
      console.error('Error generating plan:', error.response?.data || error.message);
      return NextResponse.json({ error: `Failed to generate plan: ${error.response?.data || error.message}` });
    } else {
      console.error('Unexpected error:', error);
      return NextResponse.json({ error: 'Unexpected error occurred while generating plan' });
    }
  }
}
