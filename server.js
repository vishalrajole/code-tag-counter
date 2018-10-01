const express = require('express');
const request = require('request');

const app = express();
const port = process.env.PORT || 5000;

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`PORT: ${process.env.PORT}`);
app.get('/fetch-source-code', (req, res) => {
    console.log("***** request params:", req.query.url)
    var urlParam = req.query.url;
    if (urlParam) {
        request({
            method: 'GET',
            uri: urlParam,
            gzip: true
        }, function (error, response, body) {
            console.log("inside body: ", body, error, response)
            if (error) {
                res.status(500).send({ error: 'Something went wrong. Please try after some time.' });
            } else {
                res.status(200).send(body);
            }
        });
    } else {
        res.status(500).send({ error: 'Something went wrong. Please try after some time.' });
    }

});

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));