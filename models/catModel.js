//BRING IN MODEL
const { Model } = require("../DB/conn");

//Create Cat Model

class Cat extends Model {
  static get tableName() {
    return "cats2";
  }
}

// get all Cats
Cat.all = async () => {
  return await Cat.query().select();
};

//get some Cats
Cat.some = async (query) => {
  return await Cat.query().where(query);
};

//create a Cat
Cat.create = async (item) => {
  return await Cat.query().insert(item);
};

//update a Cat by its id
Cat.updateById = async (id, info) => {
  return await Cat.query().where({ id }).update(info);
};

//delete a Cat by its id
Cat.deleteById = async (id) => {
  return await Cat.query().where({ id }).del();
};

//export object with functions to be imported where needed
module.exports = Cat;
