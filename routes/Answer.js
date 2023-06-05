const express = require('express');
const router = express.Router();

const answerDB = require('../models/Answer');	

router.post('/', async (req, res) => {
    try {
        console.log("Check here : ");
        console.log(req.body.questionId);
        await answerDB.create({
            answer: req.body.answer,
            questionId: req.body.questionId,
            user: req.body.user
        }).then(() => {
            res.status(201).send({
                status: true,
                message: 'Answer added successfully'
            });
        }).catch( (e) => {
            res.status(400).send({
                status: false,
                message: 'Error in adding answer'
            })
        })
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
