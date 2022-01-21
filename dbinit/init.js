const seed = require('./seed')
const getUserCount = async (client,table) =>{
    const { rows } = await client.query('SELECT COUNT(*) FROM ' + table )
    return Number(rows[0].count)
}

users = async client=>{
    const usersCount = await getUserCount(client,'users')
    if( usersCount === 0){
        console.log('\u001b[32m' +'seeding users'+ '\u001b[0m')
        await seed.users(client)
    }

}

module.exports = async client =>{
    await users(client)
}