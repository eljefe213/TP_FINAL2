"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var typeOrmUserRepo_1 = require("../../secondaryAdapter/typeOrmUserRepo");
var User_controllers_1 = require("../controllers/User.controllers");
var userService_1 = require("../../../core/services/userService");
var Middleware_1 = require("../middleware/Middleware");
var router = express.Router();
var userRepository = new typeOrmUserRepo_1.TypeOrmUserRepositoryPort();
var userService = new userService_1.UserService(userRepository);
var userController = new User_controllers_1.UserController(userService);
router.get("/users", userController.getAllUsers.bind(userController));
router.post("/user/create", userController.createUser.bind(userController));
router.get("/user/:id", Middleware_1.Middleware.verifyToken, userController.getUser.bind(userController));
router.put("/user/:id", Middleware_1.Middleware.verifyToken, userController.updateUser.bind(userController));
router.delete("/user/:id", Middleware_1.Middleware.verifyToken, userController.deleteUser.bind(userController));
router.get("/user/:email", Middleware_1.Middleware.verifyToken, userController.getUserByEmail.bind(userController));
exports.default = router;
//# sourceMappingURL=user.routes.js.map