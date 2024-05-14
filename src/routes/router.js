const { Router } = require("express");
const router = Router();
const CreateUser = require('../handlers/Users/CreateUser.js');
const DeleteUser = require('../handlers/Users/DeleteUser.js');
const UpdateUser = require('../handlers/Users/UpdateUser.js');
const GetAllUsers = require('../handlers/Users/GetAllUsers.js');
const GetUser = require('../handlers/Users/GetUser.js');
const CreateProduct = require('../handlers/Products/CreateProduct.js');
const RegisterProductsFromExcel = require('../handlers/Products/RegisterProductsFromExcel.js');
const DeleteProduct = require('../handlers/Products/DeleteProduct.js');
const GetAllProducts = require('../handlers/Products/GetAllProducts.js');
const GetProduct = require('../handlers/Products/GetProduct.js');
const UpdateProduct = require('../handlers/Products/UpdateProduct.js');
const AuthUser = require('../handlers/Users/AuthUser.js');
const JwtAuth = require('../handlers/Users/jwtAuth.js');
const ForgotPassword = require('../handlers/Users/ForgotPassword.js');

//Playground
router.get('/', (req, res) => {
    res.status(201).send('Main Lobby');
});

//Users CRUD
router.post('/user', CreateUser);
router.delete('/user/:id', DeleteUser);
router.patch('/user/:id', UpdateUser);
router.get('/user', GetAllUsers);
router.get('/user/:id', GetUser);
router.post('/authUser', AuthUser);
router.get('/jwtAuth', JwtAuth);
router.get('/forgotPassword', ForgotPassword);

//Products CRUD
router.post('/product', CreateProduct);
router.delete('/product/:id', DeleteProduct);
router.get('/product', GetAllProducts);
router.get('/product/:id', GetProduct);
router.patch('/product/:id', UpdateProduct);

//From Excel to DB
router.get('/productExcel', RegisterProductsFromExcel);


module.exports = router;