const express = require("express");
const fs = require("fs");
const { userInfo } = require("os");
const path = require("path");
const { start } = require("repl");
const app = express();
const port = 80;

/* Express specific stuff */
app.use('/static', express.static('stat'))
app.use(express.urlencoded())

/* Pug specific stuff */
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

/* Endpoints */
app.get('/', (req, res) => {
    const con = "Hello There, Welcome to Future To save the timeline from getting distorted we cant actually tell you about whats gonna happen. But know this something big is gonna happen but everything will be alright so dont panic"
    const main = { 'title': 'This is Title', 'content': con };
    res.status(200).render('index.pug', main);
});

app.post('/', (req, res) => {
    uname = req.body.uname
    age = req.body.age
    gender = req.body.gender
    email = req.body.email
    tell = req.body.tell

    let userInfo = `username: ${uname},userage: ${age},gender: ${gender},email: ${email},tell: ${tell}`

    fs.writeFileSync('userinfo.text', userInfo);
    const main = { 'message': 'Your form has been submitted you can exit the tab now' };
    res.status(200).render('index.pug', main);
});

/* Server start */
app.listen(port, () => {
    console.log(`My application is started successfully on port ${port}`);
});