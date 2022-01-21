const { Client } = require('pg')
const { credentials } =require('./config')
const client = new Client( credentials.postgres )

client.connect().then(async() =>{
    try{
        console.log('creating database schema')
        await require('./dbinit/create-script')(client)
        await require('./dbinit/init')(client)
    }catch(err){
        console.log('ERROR: could not initialize database')
        console.log(err.message)
    }finally{
        client.end()
    }
})

