import Person from "./models/person.js";
import mongoose from "mongoose";

async function connect_db() {
    try {
        await mongoose.connect("mongodb+srv://admin:admin@aptech.rxsutek.mongodb.net/?retryWrites=true&w=majority&appName=aptech");
        console.log("database connected");
        const person = new Person(
            {
                "username":"haris",
                "age":22
            }
        );
        await person.save();
    }
    catch (e) {
        console.log(e._message);
    }
}

connect_db();