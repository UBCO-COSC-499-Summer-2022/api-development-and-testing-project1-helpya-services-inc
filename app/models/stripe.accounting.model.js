//make stripe bank account model
const stripeAPI = require("stripe")(
  "sk_test_51LN9iJJ1ttqNM1k30e0LTKwvIU6ZPdeCyPewNhuYCpipuSGjvhyKwBJZDM4v24b1LANdAF17amgq6H9fJHIZIG8O00oR8i1Ari"
);
//Constructor
const bank_account = function (bank_account) {
  this.customerID = bank_account.customerID;
  this.account_number = bank_account.account_number;
  this.account_holder_name = bank_account.account_holder_name;
  this.account_holder_type = bank_account.account_holder_type;
  this.country = bank_account.country;
  this.currency = bank_account.currency;
  this.routing_number = bank_account.routing_number;
};

//create bank_account
bank_account.create = async (newbank_account, result) => {
  try {
    console.log(newbank_account);
    const bank_account = await stripeAPI.customers.createSource(
      newbank_account.customerID,
      {
        source: {
          object: "bank_account",
          account_number: newbank_account.account_number,
          account_holder_name: newbank_account.account_holder_name,
          account_holder_type: newbank_account.account_holder_type,
          bank_name: newbank_account.bank_name,
          country: newbank_account.country,
          currency: newbank_account.currency,
          routing_number: newbank_account.routing_number,
        },
      }
    );
    console.log(bank_account);
    result(null, bank_account);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

//list all bank_accounts by customer
bank_account.listAllByCustomer = async (customerID, result) => {
  try {
    const bank_accounts = await stripeAPI.customers.listSources(customerID, {
      object: "bank_account",
      limit: 3,
    });
    console.log(bank_accounts);
    result(null, bank_accounts);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

//find bank_account by id
bank_account.findById = async (ID, bankID, result) => {
  try {
    const bank_account = await stripeAPI.customers.retrieveSource(ID, bankID);
    console.log(bank_account);
    result(null, bank_account);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

//update bank_account by id
bank_account.updateById = async (customerID, bankID, updateOject, result) => {
  try {
    const bank_account = await stripeAPI.customers.updateSource(
      customerID,
      bankID,
      updateOject //Updates the account_holder_name, account_holder_type, and metadata of a bank account belonging to a customer.
    );
    console.log(bank_account);
    result(null, bank_account);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

//delete bank_account by id
bank_account.remove = async (customerID, bankID, result) => {
  try {
    const bank_account = await stripeAPI.customers.deleteSource(
      customerID,
      bankID
    );
    console.log("bank_account:" + bankID + "has been deleted");
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

module.exports = bank_account;
