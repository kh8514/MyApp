const express = require('express')
const app = express()
const port = 3000

let sqlite3 = require('sqlite3')

const cors = require("cors")

app.disable('x-powered-by')
app.use(cors())

let db = new sqlite3.Database('database.db', (err) => {
    if (!err) {
        db.run("CREATE TABLE tbl_about_myself (name text, email text)", (err2) => {
            if (!err2) {
                db.run("INSERT INTO tbl_about_myself (name, email) VALUES ('DOPT', 'armigar@naver.com')")
            }
        })
    }
})



app.get('/', (req, res) => {
    res.json({ rsp: 'ok' })
})

app.get('/db/about-me', (req, res, next) => {
    db.all('SELECT * FROM tbl_about_myself', (err, rows) => {
        if (!err) {
            res.json({
                rsp: 'ok',
                data: rows[0],
            })
        } else {
            console.log('Error Query')
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})