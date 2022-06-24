const sqlite3 = require('sqlite3')
const express = require('express')
const cors = require('cors')
const TYPE = require('../type')
const get = require('../get.js')
const post = require('../post.js')
const put = require('../put.js')
const initial = require('../initial.js')

const app = express()
app.use(express.json())
app.disable('x-powered-by')
app.use(cors())
app.use('/assets', express.static('assets'))

const PORT = 3000
let db = new sqlite3.Database('database.db', (err) => {
    if (!err) {
        initial.run(db, TYPE.about_me)
        initial.run(db, TYPE.resume)
        initial.run(db, TYPE.applications)
        initial.run(db, TYPE.notification)
        initial.run(db, TYPE.blog)
        initial.run(db, TYPE.accounts)
    }
})

get.setup(app, db)
post.setup(app, db)
put.setup(app, db)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})