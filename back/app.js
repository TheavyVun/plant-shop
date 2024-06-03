const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");

const userRoute = require("./routes/user-route");
const imageRoute = require("./routes/image-route");
const productRoute = require("./routes/product-route");
const sizeRoute = require("./routes/size-route");
const careRoute = require("./routes/care-route");
const lightRoute = require("./routes/light-route");
const plantTypeRoute = require("./routes/plant-type-route");
const plantGiftRoute = require("./routes/plant-gift-route");
const plantLifeStyleRoute = require("./routes/plant-life-style-route");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files
app.use("/uploads", express.static("uploads"));
app.use("/image", express.static("image"));

// Define routes
app.use("/user", userRoute);
app.use("/image", imageRoute);
app.use("/product", productRoute);
app.use("/size", sizeRoute);
app.use("/care", careRoute);
app.use("/light", lightRoute);
app.use("/plant-type", plantTypeRoute);
app.use("/plant-gift", plantGiftRoute);
app.use("/plant-life-style", plantLifeStyleRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
