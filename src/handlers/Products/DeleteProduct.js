const { Products } = require('../../database.js');

const DeleteProduct = async function(req, res){
    try {
        const { id } = req.params;
        let findProduct = await Products.findAll({
            where: {
                sku: id
            }
        });
        if(findProduct.length > 0){
            let deleteProduct = await Products.destroy({
                where: {
                    sku: id
                }
            });
            res.status(202).send(`Product SKU ${id} was succesfully deleted.`)
        } else {
            res.status(404).send(`Product SKU ${id} was not found on the DB.`);
        };
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    };
};

module.exports = DeleteProduct;