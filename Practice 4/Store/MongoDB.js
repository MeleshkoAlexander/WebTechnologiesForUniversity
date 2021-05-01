const mongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const client = new mongoClient(url, {useUnifiedTopology: true});

let collection;

async function Run(){
    await client.connect();
    collection=client.db("WebTechnologiesCourse").collection("Stats");
}

async function InsertOne(data){
    await collection.insertOne(data);
}

async function InsertMany(data){
    await collection.insertMany(data);
}
async function Find(){
    return  await collection.Find().toArray();
}

async function Close(){
    await client.close();
}
module.exports={
    Run,
    InsertOne,
    InsertMany,
    Find,
    Close,
}
