const mongooseMod = require('mongoose');

const dataSchema = new mongooseMod.Schema({
    email: { type: String, uniqe: true, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    city: { type: String, required: true },
    token: { type: String }
});

module.exports = mongooseMod.model('User', dataSchema);
