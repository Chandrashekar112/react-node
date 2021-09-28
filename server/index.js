require("dotenv").config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { AuthRouter, UserRouter, AddresRouter } from "./src/routers";

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI, {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to MOngoDB"))
  .catch((err) => console.log("Unable to connect to database"));

app.use("/v1/api/auth", AuthRouter);
app.use("/v1/api/users", UserRouter);
app.use("/v1/api/address", AddresRouter);

app.listen(process.env.PORT || 5000, () => console.log("Server is running..."));
