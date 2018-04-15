const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const initRouteConfig = require("./routes/init");
const ordersRouteConfig = require("./routes/orders");

initRouteConfig(app);
ordersRouteConfig(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {console.log("server running on " + PORT)});