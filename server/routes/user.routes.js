const UserController = require('../controllers/user.controllers');
const {authenticate} = require('../config/jwt.config')

module.exports = function(app){
    // app.get(`/api/allUsers`, UserController.index)
    app.get(`/api/allUsers`, authenticate, UserController.index)
    app.get(`/api/cookie`, UserController.cookie)
    app.post(`/api/register`, UserController.register)
    app.post(`/api/login`, UserController.login)
    app.get(`/api/logout`, UserController.logout)
//     app.get('/api/users/:id', UserController.getUser);
    app.get('/api/users', UserController.getAllUsers);
//     app.post('/api/users/new', UserController.createUser);
//     app.put('/api/users/:id', UserController.updateUser);
    app.delete('/api/users/:id', UserController.deleteUser);
}

