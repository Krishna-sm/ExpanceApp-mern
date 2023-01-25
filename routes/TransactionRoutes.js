const express = require("express");
// creater router object
const router = express.Router();
const {getAllTransaction,addTransaction,EditTransaction,DeleteTransaction}=require("../controllers/transactionController")

// routers
// add transaction using post method
router.route('/add-transaction').post(addTransaction);

// Post transaction
router.route("/get-transaction").post(getAllTransaction);
// edit router
router.route("/Edit-transaction").post(EditTransaction);
// delete route
router.route("/Delete-transaction").post(DeleteTransaction);


module.exports = router;