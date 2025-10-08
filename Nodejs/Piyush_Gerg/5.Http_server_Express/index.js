
const http = require('http');
const fs = require('fs');
const url = require('url');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    //req and res hander function is only for above GET method home page
    return res.send("Hello its Home page")
});

app.get('/about', (req, res) => {
    //req and res hander function is only for above GET method about page
    return res.send("Hello its about page " + 'and hey ' + req.query.name + ' your age is ' + req.query.age)
});

/* function myhandler(req, res) {
    if (req.url === '/favicon.ico') return res.end;
    console.log("Request recived");
    const logs = `${Date.now()} : ${req.method} : ${req.url} : logs saved\n`
    const myurl = url.parse(req.url, true);
    console.log(myurl);

    fs.appendFile('log.txt', logs, (err, data) => {
        switch (myurl.pathname) {
            case '/':
                if (req.method === 'GET') res.end('Hello its home page');
                break;
            case '/signup':
                if (req.method === 'GET') res.end("Its signup form");
                else if (req.method === 'POST'); {
                    //DB query if POST request sent to us via signup form
                    res.end("Success");
                }
                break;
            case '/about':
                res.end("Hello its about page");
                break;
            case '/search':
                const search = myurl.query.q;
                res.end("Here are your results : " + search);
                break;
            default:
                res.end("404 not found");
        }
    });

} */

const myserver = http.createServer(app);
myserver.listen(9000, () => {
    console.log("Server started");
})