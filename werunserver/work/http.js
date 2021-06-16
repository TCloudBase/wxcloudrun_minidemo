const fetch = require('node-fetch')

function fetchHttp (url, obj, timeout = 0) {
  return new Promise((resolve, reject) => {
    fetch(url, obj).then(res => res.json()).then(json => {
      setTimeout(function () {
        resolve(json)
      }, timeout)
    })
  })
}

module.exports = {
  fetchHttp: fetchHttp
}
