import { onObjectFinalized } from "firebase-functions/v2/storage";
import * as logger from "firebase-functions/logger";
import { onRequest } from "firebase-functions/v1/https";
import replicate from "./replicate.config";
import ENV from "./evn";

exports.helloWorld = onRequest((request, response) => {
  logger.log("Hello logs!");

  response.send("Hello from Firebase!");
});

exports.handleImageUpload = onObjectFinalized(
  { bucket: "boxbrownie-f3421-u78nq" },
  async (event) => {
    console.log(event, "event");
    logger.info(
      event,
      "event",
      `https://storage.googleapis.com/${event.data.bucket}/${event.data.name}`
    );

    const input = await replicate.run(ENV.replicate_model as any, {
      input: {
        image: event.data.mediaLink,
        prompt: "a picture of house an night",
        scale: 0.5,
      },
    });

    const output = await replicate.run(ENV.replicate_model as any, { input });

    return output;
  }
);
