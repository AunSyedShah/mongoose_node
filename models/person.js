import { Schema, model } from "mongoose";

const personSchema = new Schema(
    {
        "username": {
            required:true,
            type:String
        },
        "age": Number
    }
);

const Person = model("Person", personSchema);

export default Person;