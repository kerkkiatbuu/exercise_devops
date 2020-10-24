const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const item = [
    { id: 1, name:'iPhone12 Pro Max'},
    { id: 2, name:'Google Pixel 5'}
]
app.get('/', (req, res) => {
    return res.send('Hello!')
})

app.get('/item', (req, res) => {
    return res.send(item)
})


app.listen(port, () => {
    console.log(`Start Express application at ${port}`)
})

module.exports = app