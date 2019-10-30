const express = require("express");
const app = express();
const session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.listen(8000, () => console.log("listening on port 8000"));

app.get('/', (req, res) => {
    res.render("index");
});

app.post('/result', (req, res) => {
    req.session.result = req.body;
    res.render('result', { ninja: req.session.result });
})