
// 1.
const express = require('express');
const router = express.Router();


// 3.

// Date Create-Read-Update-Delete

// product create api
router.post('/', (req, res) => {
    res.json({
        message : 'product create api'
    });
});


// product read api
router.get('/', (req, res) => {
    res.json({
        message : 'product read api'
    });
});



// product update api
router.patch('/', (req, res) => {
    res.json({
        message : 'product update api'
    });
});




// product delete api
router.delete('/', (req, res) => {
    res.json({
        message : 'product delete api'
    });
});





// 2.
module.exports = router;
// express를 불러와서 그 express안에 Router기능을 사용한다. 그거를 딴데서 접근가능하게 내보낸다.