const {ObjectID} = require('mongodb');


const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result)=>{
  console.log(result);
});


// Todo.findOneAndRemove({_id:'5bec19ebeed16cad3cd6e4b2'}).then((todo)=>{
//   console.log(todo);
// });



Todo.findByIdAndRemove('5bec19ebeed16cad3cd6e4b2').then((todo)=>{
  console.log(todo);
});
