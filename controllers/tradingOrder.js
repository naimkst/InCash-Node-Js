const TradingOrder = require("../models/tradingOrder");

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

    const result = await TradingOrder.create({
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

const orderResult = async (req, res) => {
  const { user_wallet_id } = req.body;

  try {
    if (user_wallet_id == "") {
      res.status(400).json({
        error: "Opps something is wrong!",
      });
    }

    const result = await TradingOrder.find({
      user_wallet_id: user_wallet_id,
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
    if (
      (user_wallet_id == "" || symbol == "",
      amount == "",
      interval == "",
      p_type == "",
      status == "",
      start_ohlc_data == "",
      created_at == "",
      timezone == "",
      requested_at == "",
      p_type == "",
      win_amount == "",
      execute_at == "",
      started_at == "")
    ) {
      return res.status(400).json({
        error: "Oops, something is wrong!",
      });
    }

    const result = await TradingOrder.findOneAndUpdate(
      { _id: id },
      {
        $set: {
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
        },
      },
      { new: true }
    ).exec();

    if (!result) {
      return res.status(404).json({
        error: "Not found",
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

// const remove = async (req, res) => {
//   const { id } = req.body;

//   console.log(id);

//   try {
//     if (!id) {
//       return res.status(400).json({
//         error: "Oops, something is wrong!",
//       });
//     }

//     const result = await TradingOrder.deleteOne({ _id: id }).exec();

//     if (result.deletedCount === 0) {
//       return res.status(404).json({
//         error: "Comment not found",
//       });
//     }

//     res.status(200).json({
//       message: "Comment deleted successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

const getAll = async (req, res) => {
  try {
    const result = await TradingOrder.find();
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
  orderResult,
  update,
  // remove,
  getAll,
};
