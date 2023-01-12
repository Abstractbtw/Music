const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/router")
const bodyParser = require("body-parser")
const corsMiddleware = require("./middleware/cors.middleware")
const Service = require("./service/service")

const app = express()
const PORT = config.get('serverPort')

app.use(corsMiddleware)
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use("/api", authRouter)

const start = async () => {
  try {
    mongoose.connect(config.get("dbUrl"), (err) => {
      if (err) throw new Error("Connect error to MongoDB")
    })

    app.get('/tracks', async (req, res) => {
      const data = await Service.getTracks() 
      res.json(data)
    })

    app.use((req, res, next) => {
      const err = new Error("Server error")
      err.status = 500
      next(err)
    })

    app.use((err, req, res, next) => {
      res.status(err.status)
      res.send({
        status: err.status,
        message: err.message
      })
    })

    app.listen(PORT, () => {
        console.log('Server started on port', PORT)
    })

  } catch (e) {
    console.log(e)
  }

}

start()