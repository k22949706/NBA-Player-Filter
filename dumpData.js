const mysqldump = require('mysqldump');

mysqldump({
    connection: {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'nba',
        port: '3301'  //type your mysql port
    },
    dumpToFile: './nba.sql',
});