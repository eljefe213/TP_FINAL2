"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var user_routes_1 = require("./adapters/http/routes/user.routes");
var data_source_1 = require("./adapters/database/data-source");
var dotenv = require("dotenv");
var cors = require("cors");
require("reflect-metadata");
var Middleware_1 = require("./adapters/http/middleware/Middleware");
var car_routes_1 = require("./adapters/http/routes/car.routes");
dotenv.config();
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.use(Middleware_1.Middleware.errorHandler);
app.use("/auth", user_routes_1.default);
app.use("/api", car_routes_1.carRoutes);
app.get("*", function (req, res) {
    res.status(404).json({ message: "Page not found" });
});
data_source_1.AppDataSource.initialize()
    .then(function () {
    console.log("database started!!!!!!!!!");
    app.listen(PORT, function () {
        console.log("Server is running on port ".concat(PORT));
    });
})
    .catch(function (error) {
    console.log(error);
});
//# sourceMappingURL=index.js.map