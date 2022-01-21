const users = `
CREATE TABLE IF NOT EXISTS users(
    name varchar(200) NOT NULL,
    email varchar(30) NOT NULL,
    password varchar(30) NOT NULL,
    comment varchar(200),
    age integer,
    available boolean
);
`
module.exports = async client =>{
    await client.query(users)
}