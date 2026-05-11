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

module.exports = {
    getAllQuestions,
    createQuestion
};
