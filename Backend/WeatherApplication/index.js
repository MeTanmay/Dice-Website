import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({ extended: true }));

let CITY_NAME;
const API_KEY="21af6bb3ac83524d4a4aa26cc4f9f335";
const API_URL="https://api.openweathermap.org/data/2.5/weather";

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.post("/weather",async (req, res)=>{
    try{
        console.log(req.body);
        
         CITY_NAME=req.body.cityName;
        const response= await axios.get(API_URL,
            {
            params:
                {
                  q:CITY_NAME,
                  appid:API_KEY
                }
            });
        const result=response.data;
        console.log(result.weather);
        res.render("index.ejs",{city:CITY_NAME, content:response.data});
    }
    catch(error){
        res.status(404).send(error.message);
    }
});

app.use(express.static("public"));








app.listen(port, ()=>{
    console.log(`Server running on port ${3000}`);
});