const { Users } = require('../../database.js');

const GetUser = async function(req, res){
    try {
        const { id } = req.params;
        const foundUser = await Users.findAll({
            where: {
                id: id,
            }
        });
        if(foundUser.length > 0){
            res.status(202).json(foundUser);
        } else {
            res.status(404).send(`User ID ${id} was not found.`)
        };
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    };
};

module.exports = GetUser;