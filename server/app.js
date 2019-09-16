const express = require('express')
const app = express()
const cors = require('cors')
const models = require('./models')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    
    models.Hike.findAll({
    }).then(hikes => {
        res.json(hikes)
    })
})

app.listen(3001, () => {
    console.log("Server is running...")
})