const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

const secondsEl = document.getElementById("seconds");
const minsEl = document.getElementById("mins");
const hoursEl = document.getElementById("hours");
const daysEl = document.getElementById("days");



const newYears = "Jan 1 2022";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = Math.floor((newYearsDate - currentDate)/1000);

    const seconds = Math.floor(totalSeconds % 60);

    const mins = Math.floor((totalSeconds / 60) % 60);

    const hours = Math.floor((totalSeconds/3600) % 24);

    const days = Math.floor(totalSeconds / 3600 / 24);

    secondsEl.innerHTML = formatTime(seconds);
    minsEl.innerHTML = formatTime(mins);
    hoursEl.innerHTML = formatTime(hours);
    daysEl.innerHTML = formatTime(days);
   
}

function formatTime(time){
    return time < 10 ? "0${time}" : time;
}


countdown();

setInterval(countdown,1000);


app.listen("3000",function(){
    console.log("Server is running at port 30000");
});