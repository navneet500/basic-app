const express = require("express");
const app = express();

app.get("/",(req,res)=>{
res.json([
    {
        id : 1,
        name :"Navneet Sharma",
        age : 23
    },
    {
        id : 2,
        name :"Vishal Sharma",
        age : 21
    },
    {
        id : 3,
        name :"Rahul Singh",
        age : 34
    },
    {
        id : 4,
        name :"Varun",
        age : 27
    },
])
});
app.listen(5000,()=>{
    console.log("App is running on 5000 port")
})