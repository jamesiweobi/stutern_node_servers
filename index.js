// const Event = require('events')

// class MyEvent extends Event {}

// const myEvent = new MyEvent()



// myEvent.on('click', (data)=> {
//   console.log(data, " FROM THE ON CLICK EVENT")
// })

// myEvent.on('error', (error)=> {
//   console.log(error.message, ' We had an error')
// })


// myEvent.emit('click', {
//   value: 'click'
// })

// myEvent.emit('error', new Error('whoops!'));

git add .

http.createServer(function (request, reponse) {
  reponse.write('Hello World!'); //write a response to the client
  reponse.end(); //end the response
}).listen(3000); //the server object listens on port 8080


// facebook.com / 124.43.56.87 