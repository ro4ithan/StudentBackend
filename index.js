const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const studentRoutes = require("./controller/studentRoutes");
const app = express();

mongoose.set("strictQuery", true);
const uri =
  "mongodb+srv://ro4ithan:1234567890Qw@cluster0.ao0rji5.mongodb.net/School";

mongoose.connect(uri);

const db = mongoose.connection;

db.on("open", () => {
  console.log("Database connected");
});
db.on("error", (error) => {
  console.log("error while connecting to database", error);
});

app.use(express.json());
app.use(cors());
app.use("/students", studentRoutes);
const port = 5050;
app.listen(port, () => {
  console.log("server listening on port ", port);
});
