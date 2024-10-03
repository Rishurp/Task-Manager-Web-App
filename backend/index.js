const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 8082;

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://rishupandey3102:YB0mSdZ5cT5SdZlu@cluster0.zvpjh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("DB is connected"))
  .catch((error) =>
    console.log("We got an error while connecting to db", error)
  );

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
