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
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var hiveService_1 = require("./database/services/hiveService");
var PORT = process.env.PORT || 3001;
var uri = 'mongodb+srv://tauk09ph:09Taumang@own-hive.ct3kqxl.mongodb.net/?retryWrites=true&w=majority';
mongoose_1.default.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
    maxPoolSize: 10
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
})
    .then(function () {
    console.log('Connected to MongoDB');
    var app = (0, express_1.default)();
    app.use(express_1.default.json());
    //endpoints here 
    app.post('/hive', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var data, hive, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    data = req.body;
                    return [4 /*yield*/, hiveService_1.HiveService.createHive(data)];
                case 1:
                    hive = _a.sent();
                    res.json(hive);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    res.status(500).send(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    app.get('/hives', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var hives, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, hiveService_1.HiveService.getHives()];
                case 1:
                    hives = _a.sent();
                    res.json(hives);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    res.status(500).send(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    app.get('/hive/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, hive, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    return [4 /*yield*/, hiveService_1.HiveService.getHiveById(id)];
                case 1:
                    hive = _a.sent();
                    if (hive) {
                        res.json(hive);
                    }
                    else {
                        res.status(404).send('Hive not found');
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    res.status(500).send(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    app.put('/hive/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, data, updatedHive, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    data = req.body;
                    return [4 /*yield*/, hiveService_1.HiveService.updateHive(id, data)];
                case 1:
                    updatedHive = _a.sent();
                    if (updatedHive) {
                        res.json(updatedHive);
                    }
                    else {
                        res.status(404).send('Hive not found');
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    res.status(500).send(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    app.delete('/hive/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, deletedHive, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = req.params.id;
                    return [4 /*yield*/, hiveService_1.HiveService.deleteHive(id)];
                case 1:
                    deletedHive = _a.sent();
                    if (deletedHive) {
                        res.json(deletedHive);
                    }
                    else {
                        res.status(404).send('Hive not found');
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    res.status(500).send(error_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    //app port
    app.listen(PORT, function () {
        console.log("Server is running on http://localhost:".concat(PORT));
    });
})
    .catch(function (error) {
    console.error("Error in Connecting to MongoDB ".concat(error));
});
