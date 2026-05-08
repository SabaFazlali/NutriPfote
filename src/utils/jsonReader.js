const fs = require('fs/promises');
const path = require('path');

const readJSON = async (filename) => {
    try {
        const filePath = path.join(__dirname, '../../data', filename);
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading file ${filename}:`, error);
        throw error;
    }
};

const writeJSON = async (filename, data) => {
    try {
        const filePath = path.join(__dirname, '../../data', filename);
        await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
    } catch (error) {
        console.error(`Error writing file ${filename}:`, error);
        throw error;
    }
};

module.exports = {
    readJSON,
    writeJSON
};
