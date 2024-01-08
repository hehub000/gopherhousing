// Controllers here, following the pattern in ../customers/controllers.ts
import e from "express";
import { Db, MongoClient as MC, MongoError } from "mongodb";
import { Callback, model } from "mongoose";
import { cursorTo } from "readline";
import { Apartment, IApartment } from "./models"


const { MongoClient } = require("mongodb");
const DEV_URI = process.env.DEV_URI;
const client = new MongoClient(DEV_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const get_all_apartments = async () => {
  try {
    const database = client.db('apartments');
    const apts = database.collection('apartments');
    const query = {}
    const all_apts = await apts.find(query).toArray()
    return all_apts
  } catch {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

}

const add_apt = async (apt: IApartment) => {
  try {
    const database = client.db('apartments');
    const apts = database.collection('apartments');
    const newApt = apt as IApartment;
    const addApt = apts.insertOne(newApt);
    return addApt;
  } catch (error) {
    throw error;
  }
}

export default { get_all_apartments, add_apt };