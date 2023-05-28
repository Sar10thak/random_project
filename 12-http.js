const http=require('http')
const server=http.createServer((req,res)=>{
    console.log(req);
     if(req.url==='/'){
        res.write('Welcome to our localhost')
     }
     else if(req.url==='/about'){
        res.write('Welcome to our about page')
     }
     else{
        res.write(
        `<h1>Oops site error</h1>
        <p>guess u made some wrong decisions</p>
        <a href='/'>click here to go back</a>
        `
     )
     }
     res.end()
})
server.listen(5000)