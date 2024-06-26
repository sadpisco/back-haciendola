const { Users } = require('../../database.js');

const CreateUser = async function(req, res){
    try {
        const user = req.body;
        if (user.description){
            let newUser = await Users.findOrCreate({
                where: {
                    username: user.username,
                    password: user.password,
                    description: user.description
                }
            });
            res.status(202).send({
                message: `User ${user.username} has succesfully been created.`,
                status: true
            });
        } else if (!user.description){
            let newUser = await Users.findOrCreate({
                where: {
                    username: user.username,
                    password: user.password
                }
            })
            res.status(202).send({
                message: `User ${user.username} has succesfully been created.`,
                status: true
            });
        };
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    };
};



module.exports = CreateUser;