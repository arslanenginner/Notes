
// const http = require('http')
// const fs = require('fs')

// const myserver = http.createServer((req, res) => {
//     console.log("New request recived");
//     const log = `${Date.now()} : ${req.url} : Log recivied \n`;
//     fs.appendFile("log.txt", log, (err, data) => {
//         switch (req.url) {
//             case '/':
//                 res.end("Welcome to home page man logs are being saved.");
//                  break;
//             case '/about':
//                 res.end("Hello its me malware a Pentester.");
//                 break;
//             default:
//                 res.end("404 nothing found");
//         }
//     });
// });
// myserver.listen(8000, () => {
//     console.log("server started")

// });
//Use Npm install url to revice request related to queries etc

const http = require('http');
const fs = require('fs');
const url = require('url');

const myserver = http.createServer((req, res) => {
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
});

myserver.listen(9000, () => {
    console.log("Server started");
})