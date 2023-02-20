const Router =require('express');
const router = Router();
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');





router.get("/", async (_req, res) => {
    const users = await find();
    res.send(users);
});

router.post("/login",
    async (req, res) => {
      const {email, password} = req.body;
      const user = await User.findOne({email});
    
       if(user && (await bcrypt.compare(password,user.password))) {
        res.send(generateTokenReponse(user));
       }
       else{
         res.status(400).send("Username or password is invalid!");
       }
    
    }
  )

  router.post('/register', 
    async (req, res) => {
      const {name, email, password, address} = req.body;
      const user = await User.findOne({email});
      if(user){
        res.status(400)
        .send('User is already exist, please login!');
        return;
      }
  
      const encryptedPassword = await bcrypt.hash(password, 10);
  
      const newUser = User({
        id:'',
        name,
        email: email.toLowerCase(),
        password: encryptedPassword,
        address,
        isAdmin: false
      })
  
      const dbUser = await User.create(newUser);
      res.send(generateTokenReponse(dbUser));
    }
  )

  function generateTokenReponse(_user, _User){
  const token = jwt.sign({
    id: _user.id, email: _user.email, isAdmin: _user.isAdmin
  }, process.env.JWT_SECRET, {
    expiresIn: "30d"
  });

  return {
    id: _user.id,
    email: _user.email,
    name: _user.name,
    address: _user.address,
    isAdmin: _user.isAdmin,
    token: token
  };
}





  module.exports= router;