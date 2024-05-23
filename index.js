import Person from "./models/person.js";
import mongoose from "mongoose";

async function connect_db() {
    try {
        await mongoose.connect("mongodb+srv://admin:admin@aptech.rxsutek.mongodb.net/?retryWrites=true&w=majority&appName=aptech");
        console.log("database connected")
    }
    catch (e) {
        console.log(e.message);
    }
}

connect_db();