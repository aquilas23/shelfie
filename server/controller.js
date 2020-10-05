const { default: Product } = require("../src/components/Product");

module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');

        db.get_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(err => res.status(500).send(err))
    },
    postInventory: (req, res) => {
        const {inventory} = req.body;
        const db = req.app.get('db');

        db.create_product({name: Product.name, image_url: product.image_url, description :product.description,price :product.price})
        .then(inventory => res.status(200).send(inventory))
        .catch(err => res.status(500).send(err))
    }
}