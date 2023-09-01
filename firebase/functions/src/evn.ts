import * as dotenv from "dotenv";

dotenv.config();

const ENV = {
  replicatie_api_token: process.env.REPLICATE_API_TOKEN,
  replicate_model: process.env.REPLICATE_MODEL,
};

export default ENV;
