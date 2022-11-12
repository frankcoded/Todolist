const User = require('../model/User');
// get all users

exports.getAllUsers = async (req, res) => {
    try {
        let users = await User.find();
        if (users.lenght === 0)
        return res.status(404).json({
            success: false,
            message: 'No Users were found'
        });
        res.status(200).json({
            success: true,
            message: 'Users found',
            users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server Error',
            error: error.message
        });
    }
};
// create user
exports.createUser = async (req, res) => {
    try {
        let user = await req.body;
        let created = await User.create(user);
        if (!created)
        return res.status(400).json({
            success: false,
            message: 'User creation failed',
        })
        return res.status(200).json({
            success: true,
            message: 'User created successfully',
            user: created,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server',
            error: error.message,
        });
    }
};

    // delete users
    exports.updateUser = async (req, res) => {
        try {
            let id = { _id: req.params.id };
            let deleted = await User.findOneAndRemove(id);
            if (!deleted)
            return res.status(400).json({
                success: false,
                message: 'User not deleted',
            })
            return res
            .status(200)
            .json({ success: true, message: 'User deleted successfully'});
        } catch (error) {
            res.status(500)
            .json({
                success: false,
                message: 'Internal server',
                Error: error.message,
            });
        }
    };
