const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

app = express()
app.use(bodyParser.json())

port = 8000

app.listen((port)=> console.log(`app is running ${port}`))