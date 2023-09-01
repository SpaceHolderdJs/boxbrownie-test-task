import { onObjectFinalized } from "firebase-functions/v2/storage";
import { onRequest } from "firebase-functions/v1/https";
import { apps, initializeApp, database } from "firebase-admin";
import * as logger from "firebase-functions/logger";
import ENV from "./evn";
import replicate from "../../../replicate.config";
// import replicate from "./replicate.config";

if (apps.length === 0) {
    initializeApp({ storageBucket: ENV.fb_bucket });
}

exports.helloWorld = onRequest((_, response) => {
    logger.log("Hello logs!");

    response.send("Hello from Firebase!");
});

exports.handleImageUpload = onObjectFinalized(
    { bucket: ENV.fb_bucket },
    (event) => {
        const input = {
            image: event.data.mediaLink,
            prompt: "a picture of house at night",
            scale: 0.5,
        };

        replicate
            .run(ENV.replicate_model as any, {
                input,
            })
            .then((output: {}) =>
                database()
                    .ref()
                    .push({ filename: event.data.name, url: output }),
            );
    },
);
