const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('<a href="/hello">ir pra hello</a>')
})

app.get('/hello', function (req, res){
    res.send('Hello World')
})

console.log('servidor http porta 3000')
app.listen(3000)