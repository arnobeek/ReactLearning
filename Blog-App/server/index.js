const express = require("express");
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);



app.get("/test", (req,res)=>{
    res.send("It works!")
})

app.listen(8800, ()=>{
    console.log("Connected!")
})