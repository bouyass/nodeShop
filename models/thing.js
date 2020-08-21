const mongoose = require('mongoose');

const thing = mongoose.Schema({
    title:{},
    description:{},
    imageUrl:{},
    userId:{},
    price:{}
});

module.exports = mongoose.model('thing',thing);