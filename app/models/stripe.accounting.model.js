//make stripe bank account model
const stripeAPI = require("stripe")("sk_test_51LN9iJJ1ttqNM1k30e0LTKwvIU6ZPdeCyPewNhuYCpipuSGjvhyKwBJZDM4v24b1LANdAF17amgq6H9fJHIZIG8O00oR8i1Ari");
//Constructor
const bank_account = function (bank_account) {
  this.id = bank_account.id;
  this.account_holder_name = bank_account.account_holder_name;
  this.account_holder_type = bank_account.account_holder_type;
  this.bank_name = bank_account.bank_name;
  this.country = bank_account.country;
  this.currency = bank_account.currency;
  this.customer = bank_account.customer;
  this.fingerprint = bank_account.fingerprint
  this.last4 = bank_account.last4;
  this.routing_number = bank_account.routing_number;
}

//create bank_account
bank_account.create = async (newbank_account, result) => {
  try {
    const bank_account = await stripeAPI.accounts.createExternalAccount(
      newbank_account.id,
      {
        external_account: {
          //object: "bank_account",
          account_holder_name: newbank_account.account_holder_name,
          account_holder_type: newbank_account.account_holder_type,
          bank_name: newbank_account.bank_name,
          country: newbank_account.country,
          currency: newbank_account.currency,
          customer: newbank_account.customer,
          fingerprint: newbank_account.fingerprint,
          last4: newbank_account.last4,
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

//list all bank_accounts
bank_account.listAll = async (result) => {
  try {
    const bank_accounts = await stripeAPI.accounts.listExternalAccounts(
      "acct_1LN9iJJ1ttqNM1k3"
    );
    console.log(bank_accounts);
    result(null, bank_accounts);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

//find bank_account by id
bank_account.findById = async (id, result) => {
  try {
    const bank_account = await stripeAPI.accounts.retrieveExternalAccount(
      "acct_1LN9iJJ1ttqNM1k3",
      id
    );
    console.log(bank_account);
    result(null, bank_account);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

//update bank_account by id
bank_account.updateById = async (id, bank_account, result) => {
  try {
    const bank_account = await stripeAPI.accounts.updateExternalAccount(
      "acct_1LN9iJJ1ttqNM1k3",
      id,
      {
        external_account: {
          object: "bank_account",
          account_holder_name: newbank_account.account_holder_name,
          account_holder_type: newbank_account.account_holder_type,
          bank_name: newbank_account.bank_name,
          country: newbank_account.country,
          currency: newbank_account.currency,
          customer: newbank_account.customer,
          fingerprint: newbank_account.fingerprint,
          last4: newbank_account.last4,
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

//delete bank_account by id
bank_account.remove = async (id, result) => {
  try {
    const bank_account = await stripeAPI.accounts.deleteExternalAccount(
      "acct_1LN9iJJ1ttqNM1k3",
      id
    );
    console.log(bank_account);
    result(null, bank_account);
  } catch (err) {
    console.log("error: ", err);
    result(err, null);
    return;
  }
};

module.exports = bank_account;