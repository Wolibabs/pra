const express = require('express')
const { add, subtract, multiply, divide, percentage, remainder} = require('./calculate.js')
const app = express()
app.use(express.json())

app.post('/add', (req, res) => {
    const { x, y} = req.body
    const result = add(x, y)
    res.json({result})
})
app.post('/subtract', (req, res) => {
    const { x, y} = req.body
    const result = subtract(x, y)
    res.json({result})
})

app.post('/divide', (req, res) => {
    const { x, y} = req.body
    const result = divide(x, y)
    res.json({result})
})

app.post('/multiply', (req, res) => {
    const { x, y} = req.body
    const result = multiply( x, y)
    res.json({result})
})

app.post('/percentage', (req, res) => {
    const { x, y} = req.body
    const result = percentage(x, y)
    res.json({result})
})

app.post('/remainder', (req, res) => {
    const { x, y} = req.body
    const result = remainder(x,y)
    res.json({result})
})











app.listen(6700, () => {
    console.log('sever is running on 6700');
    
})