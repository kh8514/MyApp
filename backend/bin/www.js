const sqlite3 = require('sqlite3')
const express = require('express')
const cors = require('cors')
const TYPE = require('../type')
const get = require('../get.js')
const initial = require('../initial.js')

const app = express()
app.disable('x-powered-by')
app.use(cors())

const PORT = 3000
let db = new sqlite3.Database('database.db', (err) => {
    if (!err) {
        initial.run(db, TYPE.about_me)
        initial.run(db, TYPE.resume)
        initial.run(db, TYPE.applications)
        initial.run(db, TYPE.notification)
    }
})

get.setup(app, db)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})