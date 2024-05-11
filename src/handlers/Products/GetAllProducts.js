const { Products } = require('../../database.js');

const GetAllProducts = async function(req, res){
    try {
        const allProducts = await Products.findAll();
        res.status(202).json(allProducts);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    };
};

module.exports = GetAllProducts;