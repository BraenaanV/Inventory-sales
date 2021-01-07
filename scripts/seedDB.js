const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/applicationinventory"
);

const invSeed = [
    {
        itemName: "Chocolate Ice Cream",
        inventoryNumber: "CIC1",
        description: "A delicious treat!",
        price: 4.99
    },
    {
        itemName: "Vanilla Ice Cream",
        inventoryNumber: "VIC1",
        description: "Old Faithful",
        price: 3.99
    }
];

db.Inventory
  .remove({})
  .then(() => db.Inventory.collection.insertMany(invSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });