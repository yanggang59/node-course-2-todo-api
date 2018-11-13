//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id:new ObjectID('5bead3e54b0aed17a25a2140')
  // },{
  //   $set:{
  //     completed:true
  //   }
  // },{
  //   returnOriginal:false
  // }).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate(
    {
      name:'Jen'
    },{
      $set:{
        name:'Young'
      },
      $inc:{
        age:1
      }
    },{
      returnOriginal:false
    }).then((result)=>{
      console.log(result);
    });


  //db.close();
});
