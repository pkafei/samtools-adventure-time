var url = require('url')
var querystring = require('querystring')
var adventureTime = require('adventure-time')

var production = !location.port // a bit hackish but assume production if no custom port
var qs = url.parse(window.location.href, true).query

if (!qs.id) {
  qs.id = Math.random().toString(36).slice(2)
  window.location.href = window.location.href.split('?')[0] + '?' + querystring.stringify(qs)
}

var opts = {
  console: 'terminal.html',
  guide: 'guide/',
  server: qs.server || (production ? 'try-dat.com' : 'dev.try-dat.com:8080'),
  id: qs.id
}

if (!qs.server) qs.server = opts.server

opts.console += '?'+querystring.stringify(qs)

var adventure = adventureTime(opts)
