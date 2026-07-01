const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const generateAIResponse = async (systemPrompt, userPrompt) => {
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0,
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

    const cleanedResponse = aiResponse
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    const jsonMatch = cleanedResponse.match(/\{[\s\S]*\}$/);

    if (!jsonMatch) {
      console.error("No JSON found in AI response:");
      console.error(cleanedResponse);
      throw new Error("AI did not return valid JSON.");
    }

    try {
      return JSON.parse(jsonMatch[0]);
    } catch (error) {
      console.error("Failed to parse AI JSON:");
      console.error(cleanedResponse);
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