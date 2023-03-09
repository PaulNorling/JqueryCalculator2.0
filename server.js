let express = require('express');  //Linking express
let app = express();  
const PORT = process.env.PORT || 5000;  // must be change to put on heroku


let calculatorHistory = []; //store caclulation history

let bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));  //serve static files

app.listen(PORT, () => {
    console.log('listening on port:', PORT)
});