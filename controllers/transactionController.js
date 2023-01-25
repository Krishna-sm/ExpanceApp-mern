const transaction = require("../models/transactionModel");
const moment = require("moment")
const getAllTransaction = async (req, res) => {
  try {
    const { frequency, selectedDate, type } = req.body;
    const transactionData = await transaction.find({
      ...(frequency !== "custom" ? {
        date: {
          $gt: moment().subtract(Number(frequency), 'd').toDate()
        },
      } : {
        date: {
          $gte: selectedDate[0],
          $lte: selectedDate[1]
        },
      }),
      userid: req.body.userid,
      ...(type !== "all" && { type })
    });
    res.status(200).json(transactionData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
const addTransaction = async (req, res) => {
  try {
    const newTransaction = new transaction(req.body);
    await newTransaction.save();
    res.status(200).send("transaction created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
const EditTransaction = async (req, res) => {
  try {
    await transaction.findOneAndUpdate({ _id: req.body.transactionId }, req.body.payload)
    res.status(200).send("edit successful");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
const DeleteTransaction = async(req,res) => {
    try {
      await transaction.findOneAndDelete({ _id: req.body.transactionId })
      res.status(200).send("Delete  successful");
    } catch (error) {
      console.log(error);
    res.status(500).json(error);
    }
}
module.exports = { getAllTransaction, addTransaction, EditTransaction, DeleteTransaction };
