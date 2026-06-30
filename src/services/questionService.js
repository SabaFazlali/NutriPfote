const { readJSON, writeJSON } = require('../utils/jsonReader');

const getAllQuestions = async () => {
    try {
        return await readJSON('questions.json');
    } catch (error) {
        return [];
    }
};

const createQuestion = async (questionData) => {
    const questions = await getAllQuestions();
    const newQuestion = {
        id: 'q-' + Date.now(),
        date: new Date().toISOString(),
        status: 'Neu',
        ...questionData
    };

    questions.push(newQuestion);
    await writeJSON('questions.json', questions);
    return newQuestion;
};

const updateQuestionStatus = async (questionId, status) => {
    const questions = await getAllQuestions();
    const questionIndex = questions.findIndex(q => q.id === questionId);
    if (questionIndex !== -1) {
        questions[questionIndex].status = status;
        await writeJSON('questions.json', questions);
        return true;
    }
    return false;
};

module.exports = {
    getAllQuestions,
    createQuestion,
    updateQuestionStatus
};
