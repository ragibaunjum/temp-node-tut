const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('welcome to the home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Ooops!</h1>
    <p>We cannot seem to find the page that you are looking for</p>
    <a href="/">back home</p>
    `)
})

server.listen(5000)