// const express = require('express') //-> common js import
import express from "express" // es module importing

const app = express()
const port = 3000

// code run
// read
app.get("/", (req, res) => {
    // res.send("hi this is the data for you")
    res.send({
        name: "maruf",
        id: 21
    })
})




app.listen(port, () => {
    console.log("Our server is running on port: ", port)
})



















// local machine -> 3000
// http://localhost:3000

// but when you host it
// http://example.com

// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })
