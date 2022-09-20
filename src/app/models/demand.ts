import { Decision } from "./decision";
import { Document } from "./document";
import { User } from "./user";

export class Demand {
    id:number;
    name:string;
    surname:string;
    document:string;
    // document:Uint8Array;
    description:string;
    userId:number;
    isEvaluate:boolean;
    uploadTime:Date

    user?:User;
    decision?:Decision
}
