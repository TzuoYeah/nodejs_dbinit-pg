const { Client } = require('pg')
const { credentials } =require('./config')
const client = new Client( credentials.postgres )

client.connect().then(async() =>{
    try{
        console.log('creating database schema - ready')
        await require('./dbinit/create-script')(client)
        console.log('creating database schema - done')
        
        await require('./dbinit/init')(client)
    }catch(err){
        console.log('ERROR: could not initialize database')
        console.log(err.message)
    }finally{
        client.end()
    }
})

