const seed = require('./seed')

const getCount = async (client,table) =>{
    const { rows } = await client.query('SELECT COUNT(*) FROM ' + table )
    return Number(rows[0].count)
}

const users = async client=>{
    if( await getCount(client,'users') === 0){
        await seed.users(client)
        console.log('\u001b[32m' +'seeding users'+ '\u001b[0m')
    }
}

module.exports = async client =>{
    await users(client)
}