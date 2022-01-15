const express = require('express')
const cors = require('cors')
const routerBook = require('./routes/book')

const app = express()

app.use(express.json())

app.use(cors('*'))

app.use('/book',routerBook)

app.listen(4000,'0.0.0.0',()=>{
    console.log("server started on port 4000")
})