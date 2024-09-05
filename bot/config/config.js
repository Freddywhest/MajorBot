require("dotenv").config();
const settings = {
  API_ID:
    process.env.API_ID && /^\d+$/.test(process.env.API_ID)
      ? parseInt(process.env.API_ID)
      : process.env.API_ID && !/^\d+$/.test(process.env.API_ID)
      ? "N/A"
      : undefined,
  API_HASH: process.env.API_HASH || "",

  AUTO_PLAY_HOLD_TO_EARN: process.env.AUTO_PLAY_HOLD_TO_EARN
    ? process.env.AUTO_PLAY_HOLD_TO_EARN.toLowerCase() === "true"
    : true,

  AUTO_PLAY_SWIPE_COIN: process.env.AUTO_PLAY_SWIPE_COIN
    ? process.env.AUTO_PLAY_SWIPE_COIN.toLowerCase() === "true"
    : true,

  AUTO_PLAY_ROULETTE: process.env.AUTO_PLAY_ROULETTE
    ? process.env.AUTO_PLAY_ROULETTE.toLowerCase() === "true"
    : true,

  AUTO_CLAIM_TASKS: process.env.AUTO_CLAIM_TASKS
    ? process.env.AUTO_CLAIM_TASKS.toLowerCase() === "true"
    : true,

  CLAIM_DAILY_REWARDS: process.env.CLAIM_DAILY_REWARDS
    ? process.env.CLAIM_DAILY_REWARDS.toLowerCase() === "true"
    : true,

  SLEEP_BETWEEN_REQUESTS: process.env.SLEEP_BETWEEN_REQUESTS
    ? process.env.SLEEP_BETWEEN_REQUESTS.split(",").map((str) =>
        parseInt(str.trim())
      )
    : 70,

  USE_PROXY_FROM_FILE: process.env.USE_PROXY_FROM_FILE
    ? process.env.USE_PROXY_FROM_FILE.toLowerCase() === "true"
    : false,

  USE_QUERY_ID: process.env.USE_QUERY_ID
    ? process.env.USE_QUERY_ID.toLowerCase() === "true"
    : false,
};

module.exports = settings;
