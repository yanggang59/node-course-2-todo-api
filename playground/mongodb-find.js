const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id:new ObjectID('5bea70fec453c370d58e3586')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // });

  db.collection('Todos').find().count().then((n_count)=>{
    console.log(`Todos count: ${n_count}`);
  },(err)=>{
    console.log('Unable to fetch todos',err);
  });



  //db.close();
});
