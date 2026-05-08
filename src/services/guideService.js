const { readJSON } = require('../utils/jsonReader');

const getAllGuides = async () => {
    const guides = await readJSON('guides.json');
    return guides;
};

const getGuideById = async (id) => {
    const guides = await readJSON('guides.json');
    return guides.find(guide => guide.id === id);
};

module.exports = {
    getAllGuides,
    getGuideById
};
