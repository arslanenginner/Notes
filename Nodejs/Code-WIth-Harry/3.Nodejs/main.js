
// Express simple default code 

const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Its me Hacker Malware trying to Learn Backend')
})
app.get('/contact', (req, res) => {
  res.send('Hi its contact page')
})
app.get('/about', (req, res) => {
  res.send('Hi its about page')
})
app.get('/blog', (req, res) => {
  res.send('Hi its blog page')
})
app.get('/blog/:slug', (req, res) => {
  res.send(`Hi its ${req.params.slug} blog page`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})