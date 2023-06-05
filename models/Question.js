const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    questionName: String,
    questionUrl: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    user: Object,
});

const Question = mongoose.model('Question', QuestionSchema);

function create(questionData) {
  return Question.create(questionData);
}

module.exports = {
    create,
    Question,
    questionDB: Question, // Export the Question model as questionDB
  };