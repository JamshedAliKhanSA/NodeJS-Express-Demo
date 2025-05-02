const express = require("express");
const mongoose = require("mongoose");
const Categories = require("../modal/productCategorie");
const Products = require("../modal/products");

// To Show category Page 
const index = async (req, res) => {
  const found = await Categories.find({});
  res.status(200).send(found);
};

// POST Product Categories
const addCategories = async(req,res)=>{
  try {
      const categories = new Categories(req.body);
      categories.save();
      res.status(200).send(categories);
    } catch (error) {
      res.status(400).send();
    }
}

// To show all products of specific Category
const product = async (req, res) => {
   const found = await Products.find({}).where('categoryId').equals(req.params.id);
  res.status(200).send(found);
};

// POST Products

const addProduct = async(req,res)=>{
  try {
    const products = new Products(req.body);
    products.save();
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send();
  }
}

// To Show individual Product details
const show = async (req, res) => {
  const found = await Products.findById(req.params.id);
  res.status(200).send(found);
}

// Get the Product to be edit
const editProduct = async(req,res)=>{
  const found = await Products.findById(req.params.id);
  res.status(200).send(found);
}

//Update the Selected Product
const updateProduct = async(req,res)=>{
  const body = req.body;
  let title = body.title;
  let price = body.price;
  let description = body.description;
  let categoryId = body.categoryId;
  let image = body.image;
  const updated = {title:title,description:description,price:price,categoryId:categoryId,image:image};
  await Products.findByIdAndUpdate(req.params.id,updated)
  res.status(200).send(updated);

}
module.exports = { index, product, show,addCategories,addProduct,editProduct,updateProduct };

// Pushing my code to github 