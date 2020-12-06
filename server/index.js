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

app.get('/no-document-cookie', (req, res) => {
    const content = `
        <h2>don't allow document.cookie</h2>
    `
    res.set('Set-Cookie', 'mycookie2=beaf;HttpOnly')
    res.send(content)
})

app.get('/pathA', (req, res) => {
    const content = `
        <h2>set only pathA</h2>
        <h2>you only can see scopeValueA in /pathA</h2>
    `
    res.set('Set-Cookie', 'scopeValueA=pathA;path=/pathA')
    res.send(content)
})

app.get('/pathB', (req, res) => {
    const content = `
        <h2>set only pathA</h2>
        <h2>you only can see scopeValueB in /pathB</h2>
    `
    res.set('Set-Cookie', 'scopeValueB=pathB;path=/pathB')
    res.send(content)
})

app.get('/set-domain-taobao', (req, res) => {
    const content = `
        <h2>don't allow set other domain</h2>
        <h2>you only can set current domain</h2>
    `
    res.set('Set-Cookie', 'otherDomainCookie=beaf;domain=*.taobao.com')
    res.send(content)
})

app.get('/ajax-cookie', (req, res) => {
    let cookieValue = Math.random()
    const content = `
       you were setting cookie ajaxCookie with value ${ cookieValue }
    `
    res.set('Set-Cookie', `ajaxCookie=${ cookieValue }`)
    res.send(content)
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
