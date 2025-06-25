const { db } = require("../db");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = (req,res) => {
    //CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"
    db.query(q, [req.body.email, req.body.name], (err,result)=>{
        if(err)return res.json(err);
        if (result.length)return res.status(409).json("User already exists!");

        //Hash the password and create user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);


        const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)"
        const values = [
            req.body.username,
            req.body.email,
            hash
        ]
        db.query(q,[values],(err,data)=>{
            if(err) return res.json(err);
    return res.status(200).json("User has been created!");        
        })

    })

    
}
const login = (req,res) => {
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err, result) => {
        if(err) return res.json(err);
    if (result.length === 0) return res.status(404).json("User not found!");
    
    //CHECK PASSWORD
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, result[0].password);

    if(!isPasswordCorrect) return res.status(400).json("Wrong username or password!")
    })

    const token = jwt.sign({
    id:result[0].id
    }, "jwtkey");

    res.cookie

    
}
const logout = (req,res) => {
    res.json('This is user!')
}

module.exports = {register, login, logout}