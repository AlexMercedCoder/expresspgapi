//BRING IN MODEL
const { Model } = require("../DB/conn");

//Create Rat Model

class Rat extends Model {
  static get tableName() {
    return "rats";
  }
}

// get all rats
Rat.all = async () => {
  return await Rat.query().select();
};

//get some rats
Rat.some = async (query) => {
  return await Rat.query().where(query);
};

//create a rat
Rat.create = async (item) => {
  return await Rat.query().insert(item);
};

//update a rat by its id
Rat.updateById = async (id, info) => {
  return await Rat.query().where({ id }).update(info);
};

//delete a rat by its id
Rat.deleteById = async (id) => {
  return await Rat.query().where({ id }).del();
};

//export object with functions to be imported where needed
module.exports = Rat;
