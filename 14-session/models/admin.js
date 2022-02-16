const adminHome = (req, res) => {
    if(req.session.user){
        res.render("admin");
    }else{
        res.redirect('/login');
    }
};

module.exports = {
  adminHome,
};
