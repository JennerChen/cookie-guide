const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const content = `
        <h2>basic set cookie</h2>
        <p>cookie demo</p>
    `
    res.send(content)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
