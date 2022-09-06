const fs =require('fs')
const readStream=fs.createReadStream('./rakib.txt');

readStream.on('data',(chunk)=>{
    console.log('...............................')
    console.log(chunk);
})

readStream.on('open',()=>{
    console.log('stram is ready')
})

setTimeout(()=>{

    readStream.pause()
    console.log('steaming is pause')
}

    ,6)
    setTimeout(()=>{
        readStream.resume()
        console.log('steaming is resume')
    },5000)