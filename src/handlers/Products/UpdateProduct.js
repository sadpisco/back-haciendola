const { READCOMMITTED } = require('sequelize/lib/table-hints');
const { Products } = require('../../database.js');

const UpdateProduct = async function(req, res){
    try {
        const { id } = req.params;
        const {  title, stock, price, grams, comparePrice, barcode, handle, description } = req.body;
        console.log(req.body );
        let proudctToUpdate = await Products.findAll({
            where: {
                sku: id
            }
        });

        if (proudctToUpdate.length > 0){
            const [ product, updatedProduct ] = await Products.update({  title, stock, price, grams, comparePrice, barcode, handle, description }, {
                where: {
                    sku: id,
                }
            });
            res.status(202).send({
                message: `Product succesfully updated.`
            });
        } else {
            res.status(404).send(`Product SKU ${id} was not found.`);
        };
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    };
};

module.exports = UpdateProduct;