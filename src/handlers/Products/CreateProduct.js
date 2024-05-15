const { Products } = require('../../database.js');

const CreateProduct = async function(req, res){
    try {
        const product = req.body;
        if(product.barcode){
            let newProduct = await Products.findOrCreate({
                where: {
                    sku: product.sku,
                    handle: product.handle,
                    title: product.title,
                    description: product.description,
                    grams: product.grams,
                    stock: product.stock,
                    price: product.price,
                    comparePrice: product.comparePrice,
                    barcode: product.barcode
                }
            });
            res.status(202).send({message: `Product SKU ${product.sku} has succesfully been registered.`});
        } else {
            let newProduct = await Products.findOrCreate({
                where: {
                    sku: product.sku,
                    handle: product.handle,
                    title: product.title,
                    description: product.description,
                    grams: product.grams,
                    stock: product.stock,
                    price: product.price,
                    comparePrice: product.comparePrice
                }
            });
            res.status(202).send({message: `Product SKU ${product.sku} has succesfully been registered with no bardcode.`})
        };
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    };
};

module.exports = CreateProduct;