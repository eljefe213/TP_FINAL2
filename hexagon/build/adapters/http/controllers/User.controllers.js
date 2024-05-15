"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var encrypt_1 = require("../../helpers/encrypt");
var UserController = /** @class */ (function () {
    function UserController(userService) {
        this.userService = userService;
    }
    UserController.prototype.getAllUsers = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.getUsers()];
                    case 1:
                        users = _a.sent();
                        if (!users) {
                            return [2 /*return*/, res.status(404).json({ message: "No users found" })];
                        }
                        return [2 /*return*/, res.status(200).json(users)];
                }
            });
        });
    };
    UserController.prototype.getUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, this.userService.getUser(id)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, res.status(404).json({ message: "User not found" })];
                        }
                        return [2 /*return*/, res.status(200).json(user)];
                }
            });
        });
    };
    UserController.prototype.createUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, fullName, email, password, encryptedPassword, newUser, token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, fullName = _a.fullName, email = _a.email, password = _a.password;
                        return [4 /*yield*/, encrypt_1.Ecrypt.passwaorEncrypt(password)];
                    case 1:
                        encryptedPassword = _b.sent();
                        return [4 /*yield*/, this.userService.createUser({
                                fullName: fullName,
                                email: email,
                                password: encryptedPassword,
                            })];
                    case 2:
                        newUser = _b.sent();
                        if (!newUser) {
                            return [2 /*return*/, res.status(400).json({ message: "User already exists" })];
                        }
                        return [4 /*yield*/, encrypt_1.Ecrypt.generateToken({ id: newUser.id })];
                    case 3:
                        token = _b.sent();
                        return [2 /*return*/, res.status(201).json({ user: newUser, token: token })];
                }
            });
        });
    };
    UserController.prototype.updateUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, user, updatedUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        user = req.body;
                        return [4 /*yield*/, this.userService.updateUser(id, user)];
                    case 1:
                        updatedUser = _a.sent();
                        if (!updatedUser) {
                            return [2 /*return*/, res.status(404).json({ message: "User not found" })];
                        }
                        return [2 /*return*/, res.status(200).json(updatedUser)];
                }
            });
        });
    };
    UserController.prototype.deleteUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, deleted;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, this.userService.deleteUser(id)];
                    case 1:
                        deleted = _a.sent();
                        if (!deleted) {
                            return [2 /*return*/, res.status(404).json({ message: "User not found" })];
                        }
                        return [2 /*return*/, res.status(204).json()];
                }
            });
        });
    };
    UserController.prototype.getUserByEmail = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var email, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        email = req.params.email;
                        return [4 /*yield*/, this.userService.getUserByEmail(email)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, res.status(404).json({ message: "User not found" })];
                        }
                        return [2 /*return*/, res.status(200).json(user)];
                }
            });
        });
    };
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=User.controllers.js.map