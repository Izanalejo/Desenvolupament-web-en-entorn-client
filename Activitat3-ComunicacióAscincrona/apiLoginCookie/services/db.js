const mysql = require("mysql2/promise");
const config = require("../config");
const mysqlPool = mysql.createPool(config.db);
async function query(sql, params) {
    const [results] = await mysqlPool.execute(sql, params);
    return results;
}
module.exports = { 
    query 
};
