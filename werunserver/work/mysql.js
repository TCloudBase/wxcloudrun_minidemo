const config = require('../db.json')
const mysql = require('mysql')
const pool = mysql.createPool({
  connectionLimit: 100,
  ...config
})

function query(sql, param = '') {
  return new Promise((resolve, reject) => {
    const res = {}
    pool.getConnection(function (err, connection) {
      if (err) {
        res.err = err
        console.log(err)
        resolve(res)
      } else {
        connection.query(sql, param, (err, result) => {
          if (err) res.err = err
          else res.data = result
          connection.release();
          resolve(res)
        })
      }
    });

  })
}

function savelog() {
  return {
    stream: {
      write: function (log) {
        const param = log.split(' ')
        if (param[1].indexOf('/static/') != 0) {
          param[2] = parseInt(param[2])
          param[3] = parseFloat(param[3])
          query('INSERT INTO app_express(method, url, status, response_time, ip) values(?,?,?,?,?)', param.splice(0, param.length - 1))
        }
      }
    }
  }
}

module.exports = {
  query,
  savelog
}
