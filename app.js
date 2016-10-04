const PORT = 8000;

const http = require('http');
const qs = require('querystring')

// let name = 'mig';
// let language = 'Javascript';

// name -> 'mig'
// language --> 'javascript'
// default --> 'Found Nothing'

// const server = http.createServer((req, res) => {

//     //inside here is the request handler
//     //req === request object received
//     //res === response object - methods for responding

//     // console.log('req:', req);
//     // console.log('res:', res);
//     let {url, method} = req;

//     console.log(`${method} ${url}`);

//     switch(url) {
//       case '/name': 
//         res.write(name);
//         break;
      
//       case '/language':
//         res.write(language);
//         break;

//       default:  
//       res.statusCode = 404;
//       res.write('Found Nothing');
      
//     }
//     res.end('\n'); //always use end when sending a request

//     // res.write('Hello from node!');


let foods = ['bread', 'cheese']
//GET /foods --> retrieve all fods
//POST /foods?=banana --> create a new food and pushes into array

//1. separate the path from the query
//2. Ensure the path is correct
//3. Ensure the method is correct
//4. If POST, ensure we get the food query.




const server = http.createServer((req, res) => {

    //inside here is the request handler
    //req === request object received
    //res === response object - methods for responding

    let {url, method} = req;

    console.log(`${method} ${url}`);

    let [path, queryStr] = url.split('?') //destructuring array 

    let query = qs.parse(queryStr);

    // switch(path) {
    //   case '/foods':
    //     switch(method) {
    //       case 'GET':
    //         res.end(JSON.stringify(foods));
    //         break;

    //       case 'POST':
    //         if(!query.food){
    //           res.statusCode = 400;
    //           return res.end('Missing food query param');
    //         }
    //         foods.push(query.food)
    //         res.end(); 
    //     }
    //     break;

    //   default:
    //     res.statusCode = 404;
    //     res.end('Not Found');
    // }

    switch(path) {
      case '/foods':
        handleFoods(req, res)
        break;

        default:
          res.statusCode = 404;
          res.end('Not Found');

    }
-
      

    
      
  
    res.end('\n'); //always use end when sending a request

    // res.write('Hello from node!');
    


});




server.listen(PORT, err => { //first argument is an error if there is one.
console.log(err || `Server listening on port ${PORT}`);
});