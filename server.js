var express = require('express')
var path = require('path')
var app = express()
var nunjucks = require('express-nunjucks')
var routes = require(__dirname + '/app/routes.js')

app.set('view engine', 'njk')
app.set('views', path.join(__dirname, '/app/pages/'))

app.use('/dist', (express.static(path.join(__dirname, '/dist'))))

nunjucks.setup({
    autoescape: true,
    watch: true,
    noCache: true,
    tags: {
        variableStart: '<$',
        variableEnd: '$>'
    }
}, app)

// Routes (found in app/routes.js)
routes.bind(app)

var server = app.listen(process.env.PORT || 9000, function() {
    var host = server.address().address
    var port = server.address().port
    console.log('Listening on port ' + port)
})
