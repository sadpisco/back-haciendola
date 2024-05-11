const { Products } = require('../../database.js');

const GetProduct = async function(req, res){
    try {
        const { id } = req.params;
        const foundProduct = await Products.findAll({
            where: {
                sku: id
            }
        });
        if (foundProduct.length > 0){
            res.status(202).json(foundProduct);
        } else {
            res.status(404).send(`Product SKU ${id} was not found.`);
        };
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    };
};

module.exports = GetProduct;