const Comment = require("../models/tradingOrder");

const orderStore = async (req, res) => {
  const {
    user_wallet_id,
    symbol,
    started_at,
    execute_at,
    interval,
    amount,
    win_amount,
    status,
    start_ohlc_data,
    created_at,
    timezone,
    requested_at,
    p_type,
  } = req.body;

  try {
    if (amount == "") {
      res.status(400).json({
        error: "Invest Amount Field is require!",
      });
    }

    if (interval == "") {
      res.status(400).json({
        error: "Time Field is require!",
      });
    }
    if (p_type == "") {
      res.status(400).json({
        error: "Action Type Field is require!",
      });
    }

    if (symbol == "") {
      res.status(400).json({
        error: "Symbol Field is require!",
      });
    }

    if (currentTime == "") {
      res.status(400).json({
        error: "Current Time is require!",
      });
    }

    if (currentOHLC == "") {
      res.status(400).json({
        error: "Current OHLC Field is require!",
      });
    }

    const result = await Comment.create({
      user_wallet_id,
      symbol,
      started_at,
      execute_at,
      interval,
      amount,
      win_amount,
      start_ohlc_data,
      created_at,
      timezone,
      requested_at,
      p_type,
      status,
    });

    res.status(201).json({
      success: result,
      message: "Create succesfull!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

const get = async (req, res) => {
  const { blogId } = req.body;

  try {
    if (blogId == "") {
      res.status(400).json({
        error: "Opps something is wrong!",
      });
    }

    const result = await Comment.find({
      blogId: blogId,
      action: "2",
    });

    res.status(201).json({ data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};

const update = async (req, res) => {
  const { id, action } = req.body;

  try {
    if (id == "" || action == "") {
      return res.status(400).json({
        error: "Oops, something is wrong!",
      });
    }

    const result = await Comment.findOneAndUpdate(
      { _id: id },
      { $set: { action: action } },
      { new: true }
    ).exec();

    if (!result) {
      return res.status(404).json({
        error: "Comment not found",
      });
    }

    res.status(201).json({ data: result, message: "Update successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

const remove = async (req, res) => {
  const { id } = req.body;

  console.log(id);

  try {
    if (!id) {
      return res.status(400).json({
        error: "Oops, something is wrong!",
      });
    }

    const result = await Comment.deleteOne({ _id: id }).exec();

    if (result.deletedCount === 0) {
      return res.status(404).json({
        error: "Comment not found",
      });
    }

    res.status(200).json({
      message: "Comment deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const result = await Comment.find();
    res.status(201).json({ data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
    });
  }
};
module.exports = {
  orderStore,
  get,
  update,
  remove,
  getAll,
};
