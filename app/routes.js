module.exports = {
    bind: function(app) {

        app.get('/', function(req, res) {
            res.render('index')
        })

        // Handle 404
        app.use(function(req, res) {
            res.status(404)
            res.send('We are sorry but the page you are trying to reach is unavailble.')
        })

        // Handle 500
        app.use(function(error, req, res, next) {
            res.status(500)
            res.send('We are sorry but our website is currently experiencing techincal issues')
        })
    }
}
