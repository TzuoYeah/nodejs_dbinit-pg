exports.users = async client=>{
    const sql = `
    INSERT INTO  Users(
        name,
        email,
        password,
        comment,
        age,
        available
    ) VALUES($1, $2, $3, $4, $5, $6)
    `
    await client.query(sql,[
        'aaaa',
        'a123',
        '0000',
        'comment',
        20,
        true
    ])
    await client.query(sql,[
        'bbbb',
        'b456',
        '1234',
        'comment',
        23,
        true
    ])
    await client.query(sql,[
        'cccc',
        'c789',
        '5432',
        '',
        20,
        false
    ])
}