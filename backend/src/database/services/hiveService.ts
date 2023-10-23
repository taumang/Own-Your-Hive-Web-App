import { Hive } from "../models/HiveModel";
import { HiveData } from "../models/HiveInterface";

export class HiveService{
    static async createHive(data: HiveData){
        const hive = new Hive(data);
        return await hive.save();
    }

    static async getHives(){
        return await Hive.find();
    }

    static async getHiveById(id:string){
        return await Hive.findById(id);
    }

    static async updateHive(id:string,data:HiveData){
        return await Hive.findByIdAndUpdate(id,data,
            
            {new : true});
    }

    static async deleteHive(id:string){
        return await Hive.findByIdAndDelete(id);
    }
}