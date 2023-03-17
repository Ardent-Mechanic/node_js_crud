"use strict";

const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: 'roote',
    host: 'localhost',
    port: 5432,
    database: 'small_films_db'
});

module.exports = pool