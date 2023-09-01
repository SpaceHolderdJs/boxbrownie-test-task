import Replicate from "replicate";
import ENV from "./evn";

const replicate = new Replicate({
  auth: ENV.replicatie_api_token as string,
});

export default replicate;
