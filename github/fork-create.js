var request = require('xhr')

module.exports = function fork (options, callback) {
  var requestOptions = {
    url: 'https://api.github.com/repos/' + options.github.owner + '/' + options.github.repo + '/forks',
    headers: { authorization: 'token ' + options.token },
    method: 'POST'
  }

  request(requestOptions, function (err, res, body) {
    if (err) return callback(err)
    if (body.message === 'Not Found') return callback(new Error(body.message))
    body = JSON.parse(body)
    callback(err, body)
  })
}
