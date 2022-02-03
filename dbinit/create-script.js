const users = `
CREATE TABLE IF NOT EXISTS users(
    name varchar(200) NOT NULL,
    email varchar(60) NOT NULL UNIQUE,
    password varchar(60) NOT NULL,
    available boolean
);
`
module.exports = async client =>{
    await client.query(users)
}