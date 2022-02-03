exports.users = async client=>{
    const sql = `
    INSERT INTO  Users(
        name,
        email,
        password,
        available
    ) VALUES($1, $2, $3, $4)
    `
    const seeds = [
        [
            'aaaa',
            'a123',
            '0000',
            true
        ],
        [
            'bbbb',
            'b456',
            '1234',
            true
        ],
        [
            'cccc',
            'c789',
            '5432',
            false
        ]
    ]

    let i= 0
    while(i<seeds.length){
        await client.query(sql,seeds[i]).then( i++ )
    }
}