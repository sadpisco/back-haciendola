const { Users } = require('../../database.js');
const { randomUUID } = require('crypto');
const jwt = require('jsonwebtoken');

const JwtAuth = async function(req, res){
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
                jwt.sign({matchingPass: matchingPass}, 'secretKey', (error, token) => {
                    res.json({
                        token
                    });
                });
                // console.log(matchingPass);
                // res.status(200).json(matchingPass);
            } else {
                res.status(500).send({
                    message: `Wrong password for ${username}.`,
                    status: false
                });
            };
        } else {
            res.status(500).send({
                message: `${username} is not registered on our platform.`,
                status: false
            });
        };

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    };
};

module.exports = JwtAuth; 