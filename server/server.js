//const
var express = require('express');
var bodyParser= require('body-parser');

var {ObjectID} = require('mongodb');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port =process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  //console.log(req.body);
  var todo = new Todo({
    text:req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });

});


app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(e)=>{
    res.status(400).send(e);
  });
});


//GET /todos/1231324
app.get('/todos/:id',(req,res)=>{
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findById(id).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});

  }).catch((e)=>{
    res.status(400).send();
  });

});



app.delete('/todos/:id',(req,res)=>{
  //get the id
  var id = req.params.id;

  //validate the id->not valid?return 404
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>{
    res.status(400).send();
  });
  //remove todo by id
    //success
      //if no doc,send 404
      //if doc,send doc with 200
    //error
      //400 with empty body
});




app.listen(port,()=>{
  console.log(`Start On Port ${port}`);
});


module.exports={app};

//save new Something

// var Todo = mongoose.model('Todo',{
//   text:{
//     type:String,
//     required:true,
//     minlength:1,
//     trim:true
//   },
//   completed:{
//     type:Boolean,
//     default:false
//   },
//   completedAt:{
//     type:Number,
//     default:null
//   }
// });



// var newTodo = new Todo({
//   text:'Cook dinner'
// });

// newTodo.save().then((doc)=>{
//   console.log('Saved todo',doc);
// },(e)=>{
//   console.log('Unable to save todo');
// });


// var otherTodo = new Todo({
//   text:'   edit this video  '
// });
//
// otherTodo.save().then((doc)=>{
//   console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
//   console.log('Unable to save',e);
// });


//User model
//email - require -trim it - set type -set min length of 1


// var User = mongoose.model('User',{
//   email:{
//     type:String,
//     required:true,
//     trim:true,
//     minlength:1
//   }
// });
//
// var user = new User({
//   email:'thomasyang123789@gmail.com'
// });
//
// user.save().then((doc)=>{
//   console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
//   console.log('Unable to save',e);
// });
