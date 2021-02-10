const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
  itemName: { type: String, required: true },
  inventoryNumber: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String
});

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
