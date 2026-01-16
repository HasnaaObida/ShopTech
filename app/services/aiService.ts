import axios from 'axios';

const AI_API_URL = 'https://api.openai.com/v1/your-endpoint';

export const generateProductDescription = async (productName: string) => {
  const response = await axios.post(
    AI_API_URL,
    { prompt: `Write a product description for ${productName}`, max_tokens: 100 },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    }
  );

  return response.data.choices[0].text;
};
