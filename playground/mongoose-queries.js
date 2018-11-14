const {ObjectID} = require('mongodb');


const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');




// var id = '5bebd204255afa55ae809bf1';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID Not Valid');
// }


// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log('Todos \n',todos);
// });
//
//
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   console.log('Todo \n',todo);
// });
//
//
//
// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('ID Not Found');
//   }
//   console.log('Todo By ID \n',todo);
// }).catch((e)=>console.log(e));


User.findById('5beaacb7d7a64c631ba2ac8c').then((user)=>{
  if(!user){
    return console.log('Unable To Find User');
  }
  console.log(JSON.stringif(user,undefined,2));
},(e)=>{
  console.log(e);
});
