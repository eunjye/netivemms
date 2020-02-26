const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
})

connection.connect();

app.get('/api/members/base', (req, res) => {
    connection.query(
        'SELECT * FROM netivemms.member_base_info',
        (err, rows, fields) => {
            if (!err) {
                res.send(rows);
            } else {
                console.log(`query error : ${err}`);
                res.send(err);
            }
        }
    )
});
app.get('/api/members/work', (req, res) => {
    connection.query(
        'SELECT * FROM netivemms.member_work_info',
        (err, rows, fields) => {
            if (!err) {
                res.send(rows);
            } else {
                console.log(`query error : ${err}`);
                res.send(err);
            }
        }
    )
});

app.get('/api/projects', (req, res) => {
    connection.query(
        'SELECT * FROM netivemms.project_info',
        (err, rows, fields) => {
            if (!err) {
                res.send(rows);
            } else {
                console.log(`query error : ${err}`);
                res.send(err);
            }
        }
    )
});

app.listen(port, () => console.log(`Listening on port ${port}`));