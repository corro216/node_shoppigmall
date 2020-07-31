

// 1.
const express = require('express');
const router = express.Router();

// 3.

//order create api
router.post('/', (req, res) => {
    res.json({
        message : 'order create api'
    });
});

//order read api
router.get('/', (req, res) => {
    res.json({
        message : 'order read api'
    });
    
});
//product update api
router.patch('/', (req, res) => {
    res.json({
        message : 'order update api'
    });
});

//product delete api
router.delete('/', (req, res) => {
    res.json({
        message : 'order delete api'
    });
});
















// 2.
module.exports = router;





