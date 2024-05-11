const { Users } = require('../../database.js');

const UpdateUser = async function(req, res){
    try {
        const { id } = req.params;
        const { username, password, description } = req.body;
        let findUserToUpdate = await Users.findAll({
            where: {
                id: id
            }
        });

        if(findUserToUpdate.length > 0) {
            const [user, updatedUser] = await Users.update({ username, password, description}, {
                where: { id },
                returning: true
            });
            res.status(202).json(updatedUser);
        } else {
            res.status(404).send(`User ID ${id} was not found.`);
        };
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    };
};

module.exports = UpdateUser;