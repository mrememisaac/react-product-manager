import { Picture } from "./Picture";

export type Product = {
    id:string;
    name:string;
    description:string;
    price:number;
    picture:Picture;
};