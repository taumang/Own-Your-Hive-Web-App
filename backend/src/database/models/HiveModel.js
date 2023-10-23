"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hive = void 0;
var mongoose_1 = require("mongoose");
var hiveSchema = new mongoose_1.Schema({
    hiveName: String,
    hivePopulation: Number,
    apiaryLocation: String,
    nextHarvestDue: Date,
    numberOfHives: Number,
    numberOfSupers: Number
});
exports.Hive = (0, mongoose_1.model)('Hive', hiveSchema);
