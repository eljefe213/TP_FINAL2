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
exports.typeOrmCarsRepo = void 0;
var Cars_1 = require("../../core/entity/Cars");
var User_1 = require("../../core/entity/User");
var data_source_1 = require("../database/data-source");
var typeOrmCarsRepo = /** @class */ (function () {
    function typeOrmCarsRepo() {
        this.carsRepository = data_source_1.AppDataSource.getRepository(Cars_1.Cars);
        this.usersRepository = data_source_1.AppDataSource.getRepository(User_1.User);
    }
    typeOrmCarsRepo.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cars;
            return __generator(this, function (_a) {
                cars = this.carsRepository.find({ relations: ["user"] });
                return [2 /*return*/, cars];
            });
        });
    };
    typeOrmCarsRepo.prototype.findByOne = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var car;
            return __generator(this, function (_a) {
                car = this.carsRepository.findOne({
                    where: { id: param },
                    relations: ["user"],
                });
                return [2 /*return*/, car];
            });
        });
    };
    typeOrmCarsRepo.prototype.saveCar = function (user, id) {
        return __awaiter(this, void 0, void 0, function () {
            var owner, car;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersRepository.findOne({ where: { id: id } })];
                    case 1:
                        owner = _a.sent();
                        car = new Cars_1.Cars();
                        car.name = user === null || user === void 0 ? void 0 : user.name;
                        car.brand = user === null || user === void 0 ? void 0 : user.brand;
                        car.color = user === null || user === void 0 ? void 0 : user.color;
                        car.user = owner;
                        return [2 /*return*/, this.carsRepository.save(car)];
                }
            });
        });
    };
    typeOrmCarsRepo.prototype.deleteCar = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var carToDelete;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.carsRepository.findOne({ where: { id: id } })];
                    case 1:
                        carToDelete = _a.sent();
                        if (!carToDelete) {
                            throw new Error("Car not found");
                        }
                        return [4 /*yield*/, this.carsRepository.remove(carToDelete)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    typeOrmCarsRepo.prototype.updateCar = function (id, user) {
        return __awaiter(this, void 0, void 0, function () {
            var carToUpdate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.carsRepository.findOne({ where: { id: id } })];
                    case 1:
                        carToUpdate = _a.sent();
                        if (!carToUpdate) {
                            throw new Error("Car not found");
                        }
                        carToUpdate.name = user === null || user === void 0 ? void 0 : user.name;
                        carToUpdate.brand = user === null || user === void 0 ? void 0 : user.brand;
                        carToUpdate.color = user === null || user === void 0 ? void 0 : user.color;
                        return [2 /*return*/, this.carsRepository.save(carToUpdate)];
                }
            });
        });
    };
    return typeOrmCarsRepo;
}());
exports.typeOrmCarsRepo = typeOrmCarsRepo;
//# sourceMappingURL=typeOrmCarsRepo.js.map