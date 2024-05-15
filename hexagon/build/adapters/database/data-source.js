"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var dotenv = require("dotenv");
var User_1 = require("../../core/entity/User");
var Cars_1 = require("../../core/entity/Cars");
dotenv.config();
var _a = process.env, DB_HOST = _a.DB_HOST, DB_PORT = _a.DB_PORT, DB_USERNAME = _a.DB_USERNAME, DB_PASSWORD = _a.DB_PASSWORD, DB_DATABASE = _a.DB_DATABASE, NODE_ENV = _a.NODE_ENV;
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: DB_HOST,
    port: parseInt(DB_PORT || "5432"),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: NODE_ENV === "dev" ? true : false,
    logging: NODE_ENV === "dev" ? true : false,
    entities: [User_1.User, Cars_1.Cars],
    migrations: [__dirname + "/migration/*.ts"],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map