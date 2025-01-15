// lib/server.js
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";
import userRouter from "./routes/users/user.route.js";
import usersRouter from "./routes/users/users.route.js";
import staysRouter from "./routes/stays/stays.route.js";
import stayRouter from "./routes/stays/stay.route.js";

const expressServer = express();
const server = {};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
expressServer.use(bodyParser.json());
expressServer.use(bodyParser.urlencoded({ extended: true }));
expressServer.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

expressServer.use(cookieParser());
expressServer.use(express.static("public"));

/* ROUTES */
expressServer.use(userRouter);
expressServer.use(usersRouter);
expressServer.use(stayRouter);
expressServer.use(staysRouter);

/* expressServer.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist", "index.html"));
}); */

server.run = () => {
  console.log("\n\n---------------------");
  console.log("Server Started", process.env.NODE_ENV, process.env.SERVER_HOST);
  console.log("\n\n---------------------");

  expressServer.listen(process.env.SERVER_PORT, () =>
    console.log(`Running : ${process.env.SERVER_PORT}`)
  );
};

export default server;
