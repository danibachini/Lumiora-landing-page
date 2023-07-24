
import { MongoClient } from "mongodb";

const driver: string = process.env.MONGO_URL ?? '';
const client = new MongoClient(driver);

