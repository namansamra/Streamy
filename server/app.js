const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  userRouter = require("./routes/user"),
  streamRouter = require("./routes/stream"),
  cors = require("cors");
authRouter = require("./routes/auth");
(request = require("request")),
  (path = require("path")),
  (job = require("./helper/cron"));
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const options = { useNewUrlParser: true, useUnifiedTopology: true };

const dbconnect = mongoose.connect(process.env.MONGO_URL, options);
dbconnect
  .then(() => console.log("mongo initialised"))
  .catch((err) => console.log(err));

app.use("/images", express.static(path.join("./thumbnails")));

app.use("/api/user", userRouter);
app.use("/api/stream", streamRouter);
app.use("/api/auth", authRouter);

job.start();

app.listen(process.env.PORT || 8002, () => console.log("server started"));
