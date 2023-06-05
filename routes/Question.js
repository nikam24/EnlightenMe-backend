const express = require('express');
const router = express.Router();

const { create, Question, questionDB } = require('../models/Question');

router.post('/', async (req, res) => {
    console.log(req.body);
    
    try {
        await questionDB
        .create({
            questionName: req.body.questionName,
            questionUrl: req.body.questionUrl,
            user: req.body.user
        })
        .then(() => {
            res.status(201).send({
                status : true,
                message : 'Question added successfully'
            });
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            status : false,
            message : 'Error in adding question'
        });
    }
});

router.get('/', async (req, res) => {
    try {
        await questionDB.aggregate([
            {
                $lookup: {
                    from: 'answers', // collection to join
                    localField: '_id', // field from the input documents
                    foreignField: 'questionId', // field from the documents of the "from" collection
                    as: 'allAnswers' // output array field
                }
            }
        ]).exec().then((doc) => {
            res.status(200).send(doc)
        }).catch((error) => {
            res.status(500).send({
            status: false,
            message: 'Error in fetching questions'
        })
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            status : false,
            message : 'Error in fetching questions'
        });
    }
});

module.exports = router;