// TODO: model ninja

// 1. require mongoose
const mongoose = require('mongoose');

// 2. require schema
const Schema = mongoose.Schema;

// 3. create ninja schema and model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
});

// 4. create ninja model
const Ninja = mongoose.model('ninja', NinjaSchema);

// 5. export ninja model
module.exports = Ninja;