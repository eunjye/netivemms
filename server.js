const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/members', (req, res) => {
    res.send([
    {
        'number': 888,
        'team': '구축',
        'name': '은지혜1',
        'rank': '차장',
    },
    {
        'number': 2,
        'team': '운영',
        'name': '은지혜2',
        'rank': '과장',
    },
    {
        'number': 3,
        'team': '구축',
        'name': '은지혜3',
        'rank': '사원',
    },
    {
        'number': 4,
        'team': '구축',
        'name': '은지혜3',
        'rank': '사원',
    },
    {
        'number': 5,
        'team': '구축',
        'name': '은지혜3',
        'rank': '사원',
    },
    {
        'number': 6,
        'team': '구축',
        'name': '은지혜3',
        'rank': '사원',
    },
    {
        'number': 7,
        'team': '구축',
        'name': '은지혜3',
        'rank': '사원',
    }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));