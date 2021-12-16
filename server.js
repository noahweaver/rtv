const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 9000

app.use(morgan('dev'))
app.use(express.json())


mongoose.set("useCreateIndex", true)
mongoose.connect("mongodb://localhost:27017/rtv-db", 
    {useNewUrlParser: true, useUnifiedTopology: true}, 
    (err) => {
        if (err) {
            console.log(err)
        }
    console.log("Connected to the database")
    }
)

app.use("/auth", require("./routes/authRouter.js"))
app.use("/api", expressJwt({ secret: process.env.SECRET, algorithms: ['HS256']}))  //req.user
app.use("/api/issue", require("./routes/issue.js"))

app.use((err, req, res, next) => {
    console.error(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({ message: err.message })
})

app.listen(PORT, () => {
    console.log(`Starting server on port ${PORT}`)
})
