const { Users } = require('../../database.js');

const DeleteUser = async function(req, res){
    try {
        const { id } = req.params;
        let findUser = await Users.findAll({
            where: {
                id: id
            }
        });
        if (findUser.length > 0){
            let deletedUser = await Users.destroy({
                where: {
                    id: id
                }
            });
            res.status(202).send(`User ID ${id} was succesfully deleted.`);
        } else {
            res.status(404).send(`User ID ${id} was not found on the DB.`);
        };        
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    };
};

module.exports = DeleteUser;