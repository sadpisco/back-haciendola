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
                attemps++;
                res.status(500).send(`Wrong password for ${username}.`);
            };
        } else {
            res.status(500).send(`${username} is not registered on our platform.`);
        };
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    };
};

module.exports = AuthUser;