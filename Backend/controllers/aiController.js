const prompts=require("../prompts/prompts");
const { generateAIResponse } = require("../services/aiService");
const History=require("../modals/History");
const user=require("../modals/user");

const generateResponse = async (req, res) => {
  try {
    const { action, code, language="plain text" } = req.body;

    if (!action || !code) {
      return res.status(400).json({
        success: false,
        message: "Action and code are required.",
      });
    }

    const systemPrompt = prompts[action];

    if (!systemPrompt) {
      return res.status(400).json({
        success: false,
        message: "Invalid AI action.",
      });
    }

    const userPrompt = `
Selected Programming Language: ${language}

Analyze the following code strictly as ${language}.

If the submitted code does not belong to ${language},
return an error instead of analyzing it.

Code:

${code}
`;

const response = await generateAIResponse(systemPrompt, userPrompt);

    console.log(req.user);
    await History.create({
  user: req.user.id,
  title: response.title,
  action,
  language,
  code,
  response,
});

    return res.status(200).json({
      success: true,
      data: response,
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
        success: false,
        message: "Failed to generate AI response"
    });

}
};

module.exports = {
  generateResponse,
};