const express = require("express");

const app = express();

app.use( (req, res, next) => {
    res.setHeader("x-server-date", new Date());
    return next();
});

app.get("/", (req, res, next) => {
    return res.send("hello it's Jarvis");
});

app.get("/time", (req, res, next) => {
    return res.send(new Date().toString());
});

app.get("/hello", (req, res, next) => {

    if(!req.query.name)
    {
        return res.status(400).end();
    }
    else
    {
        return res.send( "hello " + req.query.name);
    }
});

app.get("/user/:name", (req, res, next) => {

        return res.send( "User " + req.params.name);
});

console.log("listening to port 5000");
app.listen(5000);
