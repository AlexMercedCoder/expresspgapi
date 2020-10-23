//////////////////////////////////
// Seed Data
/////////////////////////////////

//Import your model
const Cat = require("../models/catModel");

//import data to seed
const NewCats = [
  { name: "Test Cat 1", age: 3 },
  { name: "Test Cat 2", age: 3 },
  { name: "Test Cat 3 ", age: 3 },
  { name: "Test Cat 3", age: 3 },
];

//Put your seed login in the seed function!

const seed = async () => {
  try {
    await Cat.create(NewCats);
    console.log(await Cat.all());
  } catch (err) {
    console.error(err);
  }
};

seed();
