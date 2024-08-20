const express = require('express');

//This creates an instance of an Express application
const app = express();

/*
This sets up a route that listens for GET requests to the root URL (/). When a request is made to this URL, the provided callback function is executed. This function takes three parameters:

req: The request object, containing information about the HTTP request.
res: The response object, used to send back the desired HTTP response.
next: A function that, if called, passes control to the next middleware function. It's not used in this example but is a standard part of the route handler signature.
Inside the callback function, res.send('<h1> Hello World </h1>'); sends a response containing the HTML content <h1> Hello World </h1>. This means when a user visits the root URL of the server, they will see a webpage displaying "Hello World" in a large heading.
app.get('/', (req, res, next)=> {
    
});

*/
function middleware1(req, res, next)
{
    console.log('i am a middleware');
    next();
}
function standardExpressCallback( reqObj, resObj, nextMiddleware)
{
    console.log('i am standard express function')
    resObj.send('<h1> Hello World </h1>');
}

app.get('/', middleware1, standardExpressCallback);
/*
This line starts the server and makes it listen for incoming connections on port 3000. The number 3000 specifies the port number. You can access the server by visiting http://localhost:3000 in a web browser if you're running it locally.
*/
app.listen(300);