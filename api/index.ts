import express from "express";
import env from "./env.js";

const server = express();

server.listen(env.PORT, () => {
  console.log("Server is running!!");
});

server.get("/", (req, res) => {
  res.send("Hello");
});
