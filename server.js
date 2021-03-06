const express = require('express');
const request = require('request');
const path = require('path')

const app = express();
const port = process.env.PORT || 5000;

app.get('/fetch-source-code', (req, res) => {
    const urlParam = req.query.url;
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

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, () => console.log(`Listening on port ${port}`));