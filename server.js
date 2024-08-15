const http = require("http");
const port = 8081//local port number

http.createServer((req,res)=> {
    res.writeHead(200,{"content-Type":"text/html"

    });
    res.write("<h2>YOU ARE STARTING NEW THING TEJAYE");
    res.end();
})
//call back function
.listen(port,()=> {
    console.log('server start runing smothly on port:${port}');
});
