const login = (req, res) => {
  if(req.session.user){
    res.redirect('/admin')
  }else{
    res.render("login");
  }
};

const aboutUs = (req, res) => {
  res.send("about us");
};
const loginPost = (req, res) => {
  // write the code to check if sent data [username, password]
  // matches the following ['admin', 'admin']
  // if it matches res.json('done');
  // else res.json('error')
  const { username, password } = req.body;
  if (username === "admin" && password === "admin") {
    // fill session with some data
    req.session.user = {
      username: "admin",
    };
    res.json("done");
  } else {
    res.json("error");
  }
};

module.exports = {
  login,
  aboutUs,
  loginPost,
};
