//The password is janemanAA

import express from "express";
import parser from "body-parser"

import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app=express();
const port=3000;
var password="janemanAA";
var userEnteredPassword=""

app.use(bodyParser.urlencoded({extended:true}));

function secrets(req,res,next){
    console.log(req.body);
    userEnteredPassword=req.body["password"];
    next();
}

app.use(secrets);

app.get("/",(req,res)=>{
    res.sendFile( __dirname + "/public/index.html");
});

app.post("/check",(req,res)=>{
    if(password === userEnteredPassword){
        res.sendFile( __dirname + "/public/secret.html");
    }
    else{
        // res.send("<h1>Incorrect Password You Noob!!</h1>")
        res.sendFile( __dirname + "/public/index.html");

    }
    
    
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });

