const { Users } = require('../../database.js');

const GetAllUsers = async function(req, res){
    try {
        const allUsers = await Users.findAll();
        if (allUsers.length == 0){
            res.status(202).send({
                status: true,
                users: allUsers.length,
                message:`There is zero registered users.`
            });
        } else {
            res.status(202).json({
                status: true,
                users: allUsers.length,
                allUsers});
        };
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    };
};

module.exports = GetAllUsers;