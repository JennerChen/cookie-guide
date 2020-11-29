const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const content = `
        <h2>basic set cookie</h2>
        <p>cookie demo</p>
    `
    res.set('Set-Cookie', 'mycookie=beaf')
    res.send(content)
})

app.get('/no-document-cookie', () => {
    const content = `
        <h2>don't allow document.cookie</h2>
    `
    res.set('Set-Cookie', 'mycookie2=beaf;HttpOnly')
    res.send(content)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
