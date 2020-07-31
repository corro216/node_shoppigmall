

const express = require('express'); //express 상수화
const app = express();
 
const productRoute = require('./routes/product');



app.use('/product', productRoute);





const port = 7000;

app.listen(port, console.log('server started'));  //port통해서 서버를 실행할거고 log를 찍어준다.





