const express = require("express");
const mongoose = require("mongoose");
const productCategorie = require("../modal/products");
mongoose.connect("mongodb://localhost:27017/Shop");

async function seedingProducts(){
    console.log("Seeding Products into the Database")
        const seedProducts = new productCategorie({
            title: "Blanket",
            price: 78.12,
            description: "Blanket for kids",
            image: " image link Here",
            categoryId: "631992421875307794207fcd",
        })
        seedProducts.save();
}
try {
    seedingProducts();
} catch (error) {
    console.log(error);
}