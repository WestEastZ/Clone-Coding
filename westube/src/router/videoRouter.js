import express from "express";
import {
  watchVideo,
  getEditVideo,
  postEditVideo,
  getDeleteVideo,
  getUploadVideo,
  postUploadVideo,
} from "../controller/videoController";
import { protetorMiddleware, videoUpload } from "../middleware";

const videoRouter = express.Router();

//
videoRouter.get("/:id([0-9a-f]{24})", watchVideo);
videoRouter
  .route("/:id([0-9a-f]{24})/edit")
  .all(protetorMiddleware)
  .get(getEditVideo)
  .post(postEditVideo);
videoRouter
  .route("/:id([0-9a-f]{24})/delete")
  .all(protetorMiddleware)
  .get(getDeleteVideo);
videoRouter
  .route("/upload")
  .all(protetorMiddleware)
  .get(getUploadVideo)
  .post(videoUpload.single("video"), postUploadVideo);

export default videoRouter;
