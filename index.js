const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/models.js");
const productRoute = require("./routes/routes.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://pragathees:pragathees@cluster0.y651otq.mongodb.net/Library?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database connected successfully");
    app.listen(3000, () => {
      console.log("Server is running in port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
