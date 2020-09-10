const Pool = require('pg-pool')

const mydb = new Pool({
    database : 'backend',
    user: 'postgres',
    password: 'sonicmaster23',
    host:'localhost'
})

module.exports = mydb