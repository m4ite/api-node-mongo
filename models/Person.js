const mongoose = require('mongoose');

const Person = mongoose.model('Person', { //nome da collection
    name: String,
    lastname: String,
    salary: Number
})

module.exports = Person;