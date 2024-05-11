const { Users } = require('../../database.js');


const AuthUser = async function(req, res){
    const prueba = nanoid();
    try {
        res.status(202).send(prueba);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    };
};

module.exports = AuthUser;