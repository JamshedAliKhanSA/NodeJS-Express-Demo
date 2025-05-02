const express = require("express");
const mongoose = require("mongoose");
const productCategorie = require("../modal/productCategorie");
mongoose.connect("mongodb://localhost:27017/Shop");

async function seedingCategories(){
    console.log("Seeding Categories into the Database")
        const seedCategories = new productCategorie({
            name : "Kids"
        })
        seedCategories.save();
}
try {
    seedingCategories();
} catch (error) {
    console.log(error);
}