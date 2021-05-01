const express = require("express");
const app = express();
const mongo = require("./Store/MongoDB")

mongo.Run().catch(console.error);

app.listen(3000,function (){
    console.log("Start listen");
});

app.get("/",function (req,res){
    mongo.InsertOne({Name: "Alex"}).catch(console.error);
    res.send("document change");
});

process.on("SIGINT",function (){
    mongo.Close().catch(console.error);
    process.exit();
});

