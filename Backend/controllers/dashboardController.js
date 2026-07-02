const  History = require("../modals/History");
const { testcases } = require("../prompts/prompts");

const getDashboardData = async (req, res) => {
  try {
    const userId = req.user.id;

    // Stats
    const totalAnalysis = await History.countDocuments({
      user: userId,
    });

    const debugRequests = await History.countDocuments({
      user: userId,
      action: "debug",
    });

    const testCases = await History.countDocuments({
      user: userId,
      action: "testcases",
    });

    // Latest 2 analyses
    const recentAnalysis = await History.find({
      user: userId,
    })
      .sort({ createdAt: -1 })
      .limit(2)
      .select("title language action createdAt");

    return res.status(200).json({
      success: true,

      stats: {
        totalAnalysis,
        debugRequests,
        testCases,
      },

      recentAnalysis,
    });

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports=getDashboardData;