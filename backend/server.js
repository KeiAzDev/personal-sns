const express = require("express");
const app = express();
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const PORT = 3000;
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("DBと接続中");
  })
  .catch((err) => {
    console.log("err");
  });

  app.use(cors({
    origin: 'http://localhost:5173', // フロントエンドのURL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }));

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.get("/", (req, res) => {
  res.send("hello express")
})

app.listen(PORT, () => console.log("server")); 