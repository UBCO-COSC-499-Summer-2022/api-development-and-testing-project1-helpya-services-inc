const stripe = require("stripe")(
  "sk_test_51LN9iJJ1ttqNM1k30e0LTKwvIU6ZPdeCyPewNhuYCpipuSGjvhyKwBJZDM4v24b1LANdAF17amgq6H9fJHIZIG8O00oR8i1Ari"
);

//make stripe customer controllers
exports.create = async (req, res) => {
    try {
        const customer = await stripe.customers.create({
        email: req.body.email,
        phone: req.body.phone_number,
        address: req.body.address,
        description: req.body.description,
        name: req.body.name,
        });
        console.log(customer);
        res.send(customer);
    } catch (err) {
        console.log("error: ", err);
        res.status(500).send({
        message: err.message || "Some error occurred while creating the Customer.",
        });
    }
    };

exports.listAll = async (req, res) => {
    try {
        const customers = await stripe.customers.list();
        console.log(customers);
        res.send(customers);
    } catch (err) {
        console.log("error: ", err);
        res.status(500).send({
        message: err.message || "Some error occurred while retrieving customers.",
        });
    }
};

exports.findById = async (req, res) => {
    try {
        const customer = await stripe.customers.retrieve(req.params.id);
        console.log(customer);
        res.send(customer);
    } catch (err) {
        console.log("error: ", err);
        res.status(500).send({
        message: err.message || "Some error occurred while retrieving customers.",
        });
    }
};

exports.updateById = async (req, res) => {
    try {
        const customer = await stripe.customers.update(req.params.id, {
        email: req.body.email,
        phone: req.body.phone_number,
        address: req.body.address,
        description: req.body.description,
        name: req.body.name,
        });
        console.log(customer);
        res.send(customer);
    } catch (err) {
        console.log("error: ", err);
        res.status(500).send({
        message: err.message || "Some error occurred while retrieving customers.",
        });
    }
};

exports.deleteById = async (req, res) => {
    try {
        const customer = await stripe.customers.del(req.params.id);
        console.log(customer);
        res.send(customer);
    } catch (err) {
        console.log("error: ", err);
        res.status(500).send({
        message: err.message || "Some error occurred while retrieving customers.",
        });
    }
};

