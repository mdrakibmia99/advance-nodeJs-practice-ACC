 const {tori,name} = require("./other")

 const http =require("http");
 const url =require("url");
 const fs=require("fs");
 
//  events start
const events =require("events")
//  create a instant
 const eventEmitter=new events.EventEmitter();
//   creating a event handleer 
 const hello = ()=>{
    console.log('hello all how are you??')
 }
//  assign a handler into an event
eventEmitter.on('scream',hello)
// firing the event 
eventEmitter.emit('scream')

//  events end


const server =http.createServer((req,res)=>{






    // res.end(console.log(req.url))
    //  route or after change url 
    // if(req.url === '/'){
    //     res.writeHead(200,{'Content-Type':'text/html'})
    //     res.write(`<p>this is a home page</p>`)
    //     res.end();
    // }else if(req.url === '/user'){
    //     res.writeHead(200,{'Content-Type':'application/json'})
    //     res.write(JSON.stringify({user:"Rakib Mia"}))
    //     res.end(); 
    // }

    // for url code 
//  const user_url=`http://localhost:5000/user?name=Rakib&id=135`;
//  const parse_url=url.parse(user_url,true);
// //  res.end(console.log(parse_url.query))
//  console.log(parse_url);


// for file system fs
// if(req.url = '/'){
//     fs.readFile('rakib.txt',(error,data)=>{
//         if(error){
//             res.write('Something is wrong');
//             res.end()
//         }else{
//             res.write(data);
//             res.end()
//         }
//     })
// }
// const readfile=fs.readFileSync('rakib.txt');
// res.end(readfile);

//  write file system
//  fs.writeFile('rakib2.txt',"hello this is rakib",(err)=>{
//     if(err){
//         res.write("data filed to write")
//         res.end()
//     }else{
//         res.write('data written successfully')
//         res.end();
//     }
//  })

})
// console.log(url);
const PORT=5000;
server.listen(PORT);
console.log(`Server is running on port ${PORT}`)


 