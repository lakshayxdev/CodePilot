const History = require("../modals/History");

const getHistory = async (req, res) => {
  try {
    const history = await History.find({
      user: req.user.id,
    })
      .sort({ createdAt: -1 })
      .select("title action language createdAt");

    res.status(200).json({
      success: true,
      history,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getHistoryById = async(req, res) => {
    try {
        const history=await History.findOne ({
            _id: req.params.id,
            user: req.user.id,
        })

        if(!history) {
            return res.status(404).json({
                success: false,
                message: "History not found",
            })
        }
        res.status(200).json({
            success: true,
            history,
        })
    }
    catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

const deleteHistoryById = async(req,res) => {
    try {
        const history = await History.findOne({
            _id: req.params.id,
            user: req.user.id,
        })
        if(!history) {
            return res.status(404).json({
                success: false,
                message: "History not found",
            })
        }
        await history.deleteOne();
        res.status(200).json({
            success: true,
            message: "History deleted successfullt",
        })
    }
    catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

module.exports = {
  getHistory, getHistoryById, deleteHistoryById
};