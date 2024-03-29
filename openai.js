const { OpenAI } = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function callOpenAi(message) {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        { role: "system", content: message !== undefined ? message : "Hello" },
      ],
      model: "gpt-3.5-turbo",
      max_tokens: 200,
      n: 1,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI API Error:", error);
    throw error;
  }
}

module.exports = { callOpenAi };
