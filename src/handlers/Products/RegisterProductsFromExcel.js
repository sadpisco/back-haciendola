const { Products } = require('../../database.js');
const Sequelize = require('sequelize');
const fs = require('fs');
const xlsx = require('xlsx');

const RegisterProductsFromExcel = async function (req, res) {
    try {
        //Si es que la funcion no lee el archivo excel guardado en la carpeta raiz del proyecto, reubicar la direccion al archivo.
        const workbook = xlsx.readFile('../../pruebatecnica.xlsx');
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const datos = xlsx.utils.sheet_to_json(worksheet);

        for(let i = 0; i <= datos.length - 1; i++){
            let productToRegister = datos[i];
            productToRegister.grams = parseFloat(productToRegister.grams);
            let registeredProduct = await Products.findOrCreate({
                where: {
                    handle: productToRegister.handle,
                    title: productToRegister.title,
                    description: productToRegister.description,
                    sku: productToRegister.sku,
                    grams: productToRegister.grams,
                    stock: productToRegister.stock,
                    price: productToRegister.price,
                    comparePrice: productToRegister.comparePrice,
                    barcode: productToRegister.barcode? productToRegister.barcode:0
                }
            });
            console.log(`Producto SKU ${productToRegister.sku} has succesfully been registered.`);
        };
        console.log(`${datos.length} product(s) has succesfully been registered.`);
        res.status(202).json(datos);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    };

};

module.exports = RegisterProductsFromExcel;