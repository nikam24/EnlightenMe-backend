const express = require('express');
const router = express.Router();

const questionRouter = require('./Question');
const answerRouter = require('./Answer');

router.get('/', (req, res) => {
    res.send('Welcome to the EnlightenMe API');
});

console.log("Yaha tak toh sab thik hai.");
router.use('/question', questionRouter);
router.use('/answer', answerRouter);

module.exports = router;