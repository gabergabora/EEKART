// app.get('/', (req, res) => {
//     res.render('home');
// })

exports.home = function(req, res) {
    res.render('home');
}

exports.addproduct = function(req, res) {
    res.render('addproduct');
}

exports.signin = function(req, res) {
    res.render('signin');
    res.redirect('home');
}