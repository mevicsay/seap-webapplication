var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

var schema = new Schema({
    name: {type:String, require:true},
    email : {type:String, require:true},
    username: {type:String, require:true},
    password:{type:String, require:true},
    creation_dt:{type:Date, require:true}
});

schema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

schema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}

module.exports = mongoose.model('User',schema);