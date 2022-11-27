const express = require('express');

const app = express();

const port = 8080;


app.use(express.static(__dirname + '/public/'));
app.use('/css', express.static(__dirname + 'public/css/'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.get('/berkshireHathaway', (req, res) => {
    res.sendFile(__dirname + '/views/berkshireHathaway.html')
})

app.get('/fieldset', (req, res) => {
    res.sendFile(__dirname + '/views/fieldset.html')
})

app.get('/mypage/grid', (req, res) => {
    res.sendFile(__dirname + '/views/mypageGrid.html')
})

app.get('/mypage/flex', (req, res) => {
    res.sendFile(__dirname + '/views/mypageFlex.html')
})

app.get('/mypage', (req, res) => {
    res.sendFile(__dirname + '/views/mypage.html')
})

app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/views/test.html')
})

app.get('/formBasics', (req, res) => {
    res.sendFile(__dirname + '/views/formBasics.html')
})


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/berkshireHathaway.html')
})



//Listen on port 8080
app.listen(port, () => console.info(`Let's code on http://localhost:${port} !!`))


