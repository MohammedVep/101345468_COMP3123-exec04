const { request } = require("express")
const express = require("express")
const app = express()
const SERVER_PORT = 8088

app.get("/hello", (req, res) => {
    res.send("Hello Express JS")
})

app.get("/user", async (req, res) => {
    var user = {
        first_name: "Pritesh",
        last_name: "Patel"
    }
    res.send(JSON.stringify(user))
})

app.get("/user", (req, rer) => {
    const first_n = req.query.first_name
    const last_n = req.query.last_name
    console.log(req.query)
    request.send({first_n, last_n})
})

app.post("/user", (req, rer) => {
    const first_n = req.params.first_name
    const last_n = req.params.last_name
    console.log(req.params)
    request.send({first_n, last_n})
})

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})