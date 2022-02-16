const login = (req, res) =>{
    res.render('login')
}

const aboutUs = (req, res) =>{
    res.render('about us')
}

module.exports = {
    login,
    aboutUs
}