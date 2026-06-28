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

    const response = await generateAIResponse(systemPrompt, code);
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
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  generateResponse,
};