const mongoose = require('mongoose');

const subTodoSchema = new mongoose.Schema({
    
}, {
    timestamps: true
});

const SubTodo = mongoose.model('Todo', subTodoSchema);

module.exports = SubTodo;