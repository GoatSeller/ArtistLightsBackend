import express from "express";
import router from "./routes/allPictures";

let index: express.Application = express();

index.use(router);

index.listen(8000, () => {
  console.log("Server started");
});
