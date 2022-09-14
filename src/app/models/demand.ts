import { Document } from "./document";

export class Demand {
    id:number;
    name:string;
    surname:string;
    document:Blob[];
    description:string;
    userId:number;
    isEvaluate:boolean;
    uploadTime:Date
}
