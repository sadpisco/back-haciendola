const { Users } = require('../../database.js');

const AuthUser = async function(req, res){
    let attemps = 0;
    try {
        const { username, password } = req.body;
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
                    authenticated: true
                });
            } else {
                attemps = attemps + 1;
                res.status(500).send({
                    message: `Wrong password for ${username}.`,
                    failedPasswordAttemps: attemps,
                    status: false
                });
            };
        } else {
            res.status(500).send({
                message: `${username} is not registered on our platform.`,
                failedPasswordAttemps: attemps,
                status: false
            });
        };
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    };
};

module.exports = AuthUser;