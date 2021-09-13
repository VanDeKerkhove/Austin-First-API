// console.log('hello world ▓╚∟');
// console.log(process.platform);
// console.log(process.env);

const express = require("express");
const app = express();

app.get('/', (req,resp) =>{
    resp.send("Welcome to the jungle.");
    // resp.send('hello world ▓╚∟');
});

app.listen(3000, () => {
    console.log("App available on port 3000");
});