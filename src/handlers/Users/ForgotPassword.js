const { Users } = require('../../database.js');

const ForgotPassword = async function(req, res){

    try {

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    };
};

module.exports = ForgotPassword;