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
    if (user_wallet_id == "") {
      res.status(400).json({
        error: "user_wallet_id Field is require!",
      });
    }

    if (symbol == "") {
      res.status(400).json({
        error: "symbol Field is require!",
      });
    }
    if (started_at == "") {
      res.status(400).json({
        error: "started_at Field is require!",
      });
    }

    if (execute_at == "") {
      res.status(400).json({
        error: "execute_at Field is require!",
      });
    }

    if (interval == "") {
      res.status(400).json({
        error: "interval Field is require!",
      });
    }
    if (win_amount == "") {
      res.status(400).json({
        error: "win_amount Field is require!",
      });
    }
    if (status == "") {
      res.status(400).json({
        error: "status Field is require!",
      });
    }
    if (start_ohlc_data == "") {
      res.status(400).json({
        error: "start_ohlc_data Field is require!",
      });
    }
    if (created_at == "") {
      res.status(400).json({
        error: "created_at Field is require!",
      });
    }
    if (timezone == "") {
      res.status(400).json({
        error: "timezone Field is require!",
      });
    }
    if (requested_at == "") {
      res.status(400).json({
        error: "requested_at Field is require!",
      });
    }
    if (p_type == "") {
      res.status(400).json({
        error: "p_type Field is require!",
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
    end_ohlc_data,
    p_result,
    created_at,
    timezone,
    requested_at,
    p_type,
    _id,
  } = req.body;

  try {
    if (_id == "") {
      return res.status(400).json({
        error: "Oops, something is wrong!",
      });
    }

    const result = await TradingOrder.findOneAndUpdate(
      { _id: _id },
      {
        $set: {
          ...req.body,
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
