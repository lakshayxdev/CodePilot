const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const generateAIResponse = async (systemPrompt, userPrompt) => {
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile", 
      temperature: 0.3,
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: userPrompt,
        },
      ],
    });

   const aiResponse = completion.choices[0].message.content;

   try {
    return JSON.parse(aiResponse);
} catch (error) {
    throw new Error("AI returned invalid JSON.");
}

  } catch (error) {
    console.error("Groq Error:", error);

    throw new Error("Failed to generate AI response.");
  }
};

module.exports = {
  generateAIResponse,
};