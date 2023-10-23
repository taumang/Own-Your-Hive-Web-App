import {Schema, model} from 'mongoose';

const hiveSchema = new Schema({
    hiveName:String,
    hivePopulation:Number,
    apiaryLocation:String,
    nextHarvestDue:Date,
    numberOfHives:Number,
    numberOfSupers:Number
});

export const Hive = model ('Hive', hiveSchema)