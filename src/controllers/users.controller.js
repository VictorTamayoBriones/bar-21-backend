const userCtrl = {}
const User = require('../models/User');

userCtrl.getUsers = async (req, res)=>{
    const users = await User.find();
    res.json(users);
}

userCtrl.getUser = async (req, res)=>{
    const user = await User.findById(req.params.id);
    res.json(user);
}

userCtrl.createUser = async (req, res)=>{
    const { userName, userType, userEmail, userPass } = req.body;
    const newUser = new User({
        userName: userName,
        userType: userType,
        userEmail: userEmail,
        userPass: userPass
    });
    await User.create(newUser);
    res.json({ message: 'User created' });
}

userCtrl.updateUser = async (req, res)=>{
    const { userName, userType, userEmail, userPass }=req.body;
    await User.findByIdAndUpdate(req.params.id,{
        userName: userName,
        userType: userType,
        userEmail: userEmail,
        userPass: userPass
    });
    res.json({ message: 'User Updated' })
}

userCtrl.deleteUser = async (req, res)=> {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
}

module.exports = userCtrl;