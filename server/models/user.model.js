const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    }
}, {timestamps: true});


UserSchema.virtual('confirmPassword')
    .get( () => this.confirmPassword)
    .set( value => this.confirmPassword = value );

UserSchema.pre('validate', function(next){
    console.log(this.password)
    console.log(this.get('confirmPassword'))
        if(this.password !== this.get('confirmPassword')){
            this.invalidate('confirmPassword', 'Password must match confirm password')
        }
        next()
    });

UserSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
        .then(hash=>{
            this.password = hash
            next()
        })
})



module.exports.User = mongoose.model('User', UserSchema);

