import express from "express";
import dotenv from "dotenv";
import { middleware } from "./middleware";
import { errorHandler } from "./middleware/error.middleware";
import usersRouter from "./routes/user.route";
import feedRouter from "./routes/feed.route";
import authRouter from "./routes/auth.route";
import logRouter from "./routes/log.route";
import { onStartupCreateCredentials } from "./services/user.service";
import { autoDeleting } from "./logs";

dotenv.config();

const app = express();
const PORT = process.env.NODE_PORT || 8080;

middleware(app); // Enable the middleware defined in the middleware file

// Use the usersRouter for the "/users" path
app.use("/users", usersRouter);

// Use the feedRouter for the "/feed" path
app.use("/feed", feedRouter);

// Use the authRouter for the "/auth" path
app.use("/auth", authRouter);

// Use the logRouter for the "/log" path
app.use("/log", logRouter);

// Route handler that will be executed for all requests
app.use("*", (req, res, next) => {
  throw new Error("no route found");
});

app.use(errorHandler);

onStartupCreateCredentials();

setInterval(autoDeleting, 1000);

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}.`);
});
