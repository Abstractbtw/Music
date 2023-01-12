const Router = require("express")
const router = new Router()
const Service = require("../service/service")
const apiMiddleware = require("../middleware/api.middleware")


router.post('/registration', apiMiddleware.registration, async (req, res) => {
  Service.registration(req.body).then((user) => {res.json(user)})
})



router.post('/login', apiMiddleware.login, async (req, res) => {
  Service.login(req.body).then((user) => {res.json(user)})
})



router.post('/addtrack', async (req, res) => {
  console.log(req.body)
  Service.addTrack(req.body).then((task) => {res.json(task)})
})



module.exports = router