class Question {
    constructor(id, isAnswered) {
        this.id = id;
        this.isAnswered = isAnswered;
    }
}

const questions = [];

function initQuestions(numberOfQuestions) {
    for (let i = 1; i <= numberOfQuestions; i++) {
        questions.push(new Question(i, false));
    }
}

initQuestions(4);

class DigitalTransQuizManager {
    constructor(firstPageFinish, secondPageFinish) {
        this.firstPageFinish = firstPageFinish;
        this.secondPageFinish = secondPageFinish;
    }

    isQuestionAnswered(questionId) {
        return questions[questionId];
    }
}

const manager = new DigitalTransQuizManager(false, false);

export default manager;
