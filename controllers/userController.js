const User = require('../models/User');

const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateProfile = async (req, res) => {
    const updates = {
        username: req.body.username,
        email: req.body.email
    };

    if (req.body.password) {
        updates.password = req.body.password;
    }

    try {
        const user = await User.findById(req.user._id);
        Object.assign(user, updates);
        await user.save();

        const userWithoutPassword = user.toObject();
        delete userWithoutPassword.password;

        res.json(userWithoutPassword);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).select('-password');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    const updates = {
        username: req.body.username,
        role: req.body.role
    };

    if (req.body.password) {
        updates.password = req.body.password;
    }

    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        Object.assign(user, updates);
        await user.save();

        const userWithoutPassword = user.toObject();
        delete userWithoutPassword.password;

        res.json(userWithoutPassword);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getProfile,
    updateProfile,
    getAllUsers,
    deleteUser,
    updateUser
};
