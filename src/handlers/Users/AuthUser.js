const { Users } = require('../../database.js');

const AuthUser = async function(req, res){
    try {
        const { username, password } = req.body;
        console.log(username, password);
        let foundUser = await Users.findAll({
            where: {
                username: username
            }
        });
        if (foundUser.length > 0){
            let matchingPass = await Users.findAll({
                where: {
                    username: username,
                    password: password
                }
            });
            if (matchingPass.length > 0){
                res.status(202).send({
                    status: true,
                    authenticated: true,
                    user: matchingPass[0]
                });
            } else {
                res.status(404).send({
                    message: `Wrong password for ${username}.`,
                    status: false
                });
            };
        } else {
            res.status(404).send({
                message: `${username} is not registered on our platform.`,
                status: false
            });
        };
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    };
};

module.exports = AuthUser;