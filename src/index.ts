import express from "express";
import dotenv from "dotenv";
import { middleware } from "./middleware";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();
const PORT = process.env.NODE_PORT || 8080;
middleware(app);

// Route handler that will be executed for all requests
app.use("*", (req, res, next) => {
  throw new Error("no route found");
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`application is running on port ${PORT}.`);
});
