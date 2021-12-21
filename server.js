const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')

app.use(morgan('dev'))
app.use(express.json())


// mongoose.set("useCreateIndex", true)
mongoose.connect("mongodb://localhost:27017/rtv-db", 
    {useNewUrlParser: true, useUnifiedTopology: true}, 
    (err) => {
        if (err) {
            console.log(err)
        }
    console.log("Connected to the database")
    }
)
//add the set algorithms after secret algorithms: ['HS256'] 
app.use("/auth", require("./routes/authRouter.js"))
app.use("/api", expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))  //req.user
app.use("/api/issue", require("./routes/issueRouter.js"))

app.use((err, req, res, next) => {
    console.error(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({ errMsg: err.message })
})

app.listen(9000, () => {
    console.log(`Starting server on Port 9000`)
})
