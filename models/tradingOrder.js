const { mongoose } = require("mongoose");

const TradingOrder = new mongoose.Schema(
  {
    p_type: {
      type: String,
    },
    user_wallet_id: {
      type: String,
    },
    symbol: {
      type: String,
    },
    symbol_details: {
      type: String,
    },
    requested_at: {
      type: String,
    },
    started_at: { type: String, default: Date.now },
    execute_at: {
      type: String,
      nullable: true,
    },
    interval: {
      type: String,
    },
    status: {
      type: String,
    },
    start_ohlc_data: {
      type: String,
    },
    end_ohlc_data: {
      type: String,
    },
    p_result: {
      type: String,
    },
    amount: {
      type: String,
    },
    win_amount: {
      type: String,
    },
    timezone: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TradingOrder", TradingOrder);
