const adminHome = (req, res) => {
    if(req.session.user){
        res.render("admin");
    }else{
        res.redirect('/login');
    }
};

const logout = (req,res) =>{
    // destroy session means: remove all values from the session
    req.session.destroy();
    res.redirect('/login');
}

const logoutPost = (req,res) =>{
    req.session.destroy();
    res.json('done')
}

module.exports = {
  adminHome,
  logout,
  logoutPost
};
