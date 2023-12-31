const express = require('express');
const Home = require('../controllers/HomeController');
const User = require('../controllers/UserController');
const Expense = require('../controllers/ExpenseController');
const Auth = require('../middleware/AuthMiddleware');
const router = express.Router();

router.get('/',Auth,Home.home)

router.post('/login',User.login);

router.post('/register',User.register);

router.post('/my-account',User.myaccount);

router.post('/expenses',Auth,Expense.getAllExpense);

router.post('/expense/store',Expense.storeExpense);

router.post('/expense/update',Expense.updateExpense);

router.post('/expense/delete',Expense.deleteExpense);

router.post('/expense/:id',Expense.getExpense);




module.exports = router;