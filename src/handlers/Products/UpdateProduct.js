const { Products } = require('../../database.js');

const UpdateProduct = async function(req, res){
    try {
        const { id } = req.params;
        const { handle, title, description, grams, stock, price, comparePrice, barcode } = req.body;
        let proudctToUpdate = await Products.findAll({
            where: {
                sku: id,
            }
        });

        if (proudctToUpdate.length > 0){
            const [ product, updatedProduct ] = await Products.update({ handle, title, description, grams, stock, price, comparePrice, barcode }, {
                where: {
                    sku: id,
                    returning: true
                }
            });
            res.status(202).json(updatedProduct);
        } else {
            res.status(404).send(`Product SKU ${id} was not found.`);
        };
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    };
};

module.exports = UpdateProduct;