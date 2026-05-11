const { readJSON, writeJSON } = require('../utils/jsonReader');

const getAllGuides = async () => {
    const guides = await readJSON('guides.json');
    return guides;
};

const getGuideById = async (id) => {
    const guides = await readJSON('guides.json');
    return guides.find(guide => guide.id === id);
};

const createGuide = async (guideData) => {
    const guides = await getAllGuides();
    const newGuide = {
        id: guideData.id || 'g-' + Date.now(),
        ...guideData
    };

    guides.push(newGuide);
    await writeJSON('guides.json', guides);
    return newGuide;
};

const updateGuide = async (id, guideData) => {
    const guides = await getAllGuides();
    const index = guides.findIndex(guide => guide.id === id);

    if (index === -1) {
        return null;
    }

    guides[index] = {
        ...guides[index],
        ...guideData,
        id
    };

    await writeJSON('guides.json', guides);
    return guides[index];
};

const deleteGuide = async (id) => {
    const guides = await getAllGuides();
    const filteredGuides = guides.filter(guide => guide.id !== id);

    if (filteredGuides.length === guides.length) {
        return false;
    }

    await writeJSON('guides.json', filteredGuides);
    return true;
};

module.exports = {
    getAllGuides,
    getGuideById,
    createGuide,
    updateGuide,
    deleteGuide
};
