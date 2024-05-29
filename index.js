require("dotenv").config();
const express = require("express");

const app = express();


const port = 4000;

app.get("/", function (req, res) {
    res.send("Hello World!");
});

app.get('/twitter',(req, res)=>{
    res.send("hello twitter");
})

app.get('/login',(req, res)=>{
    res.send("<h1>login page</h1>");
})
// app.get('/facebook',(req, res)=>{
//     res.send("hello facebook");
// })

app.listen(process.env.PORT, ()=> {
    console.log(`Example app listening on port ${port}!`);
});
// app.listen(port, function () {
//     console.log(`Example app listening on port ${port}!`);
// });
