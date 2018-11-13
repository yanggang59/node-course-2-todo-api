//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //delete many
  // db.collection('Todos').deleteMany({text :'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });


  //delete One
  // db.collection('Todos').deleteOne({text :'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });


  //find one and delete
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  //   console.log(result);
  // });


db.collection('Users').deleteMany({name:'Andrew'});


db.collection('Users').findOneAndDelete({_id: new ObjectID('5bea71bb29b81743100a7a58')}).then((result)=>{
  console.log(JSON.stringify(result),undefined,2);
});

  //db.close();
});
