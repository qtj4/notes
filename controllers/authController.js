const jwt = require('../config/jwt');
const User = require('../models/User');

const register = async (req, res) => {
    try {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        await user.save();
        
        const token = jwt.generateToken(user._id);

        res.status(201).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await user.comparePassword(password))) {
            throw new Error('Invalid credentials');
        }

        const token = jwt.generateToken(user._id);

        res.json({ user, token });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

module.exports = { register, login };