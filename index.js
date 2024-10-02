
//Creating a server using NodeJs
import { createServer } from "node:http"

const hostname = "127.0.0.1" //localhost
const port = 9999
//200  400  500

//200 = ok
//400 = Client side Error
//500 = Backend Error



const Server = createServer(function(red, res){
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain")
    res.end("Hello World!")
})

Server.listen(port, hostname, function(){
    console.log("Server is listing");
})


