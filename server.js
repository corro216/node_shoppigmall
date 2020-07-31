

const express = require('express'); //express 상수화
const app = express();
 


// request 와 response 의 테스팅
app.use((req, res) => {
    res.json({
        message : 'fighting'
    });
});





const port = 7000;

app.listen(port, console.log('server started'));  //port통해서 서버를 실행할거고 log를 찍어준다.





