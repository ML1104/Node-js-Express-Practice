const express = require('express')
const app = express()
const loops = require('./loops')
const buzz = require('./buzz')
const id = require('./parameter')

app.get('/', (req, res) => res.send('Hello ' + req.get('user-agent')))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.get('/loop', loops.loopNumbers)

app.get('/fizzbuzz', buzz.fizzBuzz)
app.get('/param/:id', id.param)