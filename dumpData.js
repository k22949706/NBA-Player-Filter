const mysqldump = require('mysqldump');

mysqldump({
    connection: {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'nba',
        port: '3301'
    },
    dumpToFile: './nba.sql',
});