const { Users } = require('../../database.js');

const GetAllUsers = async function(req, res){
    try {
        const allUsers = await Users.findAll();
        res.status(202).json(allUsers);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    };
};

module.exports = GetAllUsers;