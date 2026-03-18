import express from "express"
import "dotenv/config"
import { connectDb, getDb } from "./db.js";
import cors from "cors"

const app = express();
const port = 3000;
app.use(express.json())
// crosss orign
app.use(cors({
    origin: ["http://localhost:3001"]
}))

// if you face any problem related to cors then use:
// app.use(cors({
//     origin: "*"
// }))


// crud operation
// http:localhost:3000/
// http:example.com/
app.get("/", (req, res) => {
    res.send("todo backend is runninng")
})

// create, read, update, delete

// create todo 
// http://localhost:3000/api/todo
// http:example.com/api/todo
app.post("/api/todo", async (req, res) => {
    try {
        // this code should run

        // extracting data send by user
        const reqData = req.body


        // save the data in mongodb
        const todoDb = getDb("TodoAppDb");
        const todos = await todoDb.collection("todosCollection").insertOne(reqData);

        res.send({
            success: true,
            message: "todo created successfully",
            data: todos
        })
    } catch (error) {
        // if any error ocurs
        console.log("Something went wrong", error)
        res.send({
            success: false,
            message: "todo creation failed",
            error: error
        })
    }
})

// http://localhost:3000/api/all-todo
// http:example.com/api/all-todo
app.get("/api/all-todo", async (req, res) => {
    try {
        // this code should run
        console.log("get api hit")

        // save the data in mongodb
        const todoDb = getDb("TodoAppDb");
        const todos = await todoDb.collection("todosCollection").find().toArray();

        res.send({
            success: true,
            message: "todo get successful",
            data: todos
        })
    } catch (error) {
        // if any error ocurs
        console.log("Something went wrong", error)
        res.send({
            success: false,
            message: "todo get failed",
            error: error
        })
    }
})










// we need database connection
// mongodb
try {
    connectDb()
    app.listen(port, () => {
        console.log("our backend app is running on port, ", port)
    })
} catch (error) {
    console.log("backend connection failded", error)
}




