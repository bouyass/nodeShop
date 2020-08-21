const mongoose = require('mongoose');
const mongoose_unique = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email:{type:String, required:true,unique:true},
    password:{type:String,required: true}
});

userSchema.plugin(mongoose_unique);

module.exports = mongoose.model('User',userSchema);