const fs = require('fs').promises;
const path = require('path');
const cmsFilePath = path.join(__dirname, '../../data/cms.json');

const defaultCMS = {
  home: {
    title: "Nähren Sie Ihr Haustier mit dem Besten aus der Natur",
    description: "Entdecken Sie unsere Premium-Auswahl an biologischem, umweltfreundlichem Tierfutter, das auf die einzigartigen Bedürfnisse Ihres pelzigen Freundes zugeschnitten ist.",
    image: "/img/hero-bg.jpg"
  },
  shop: {
    title: "Unser Shop",
    description: "Premium-Tiernahrung für ein gesundes Leben.",
    image: "/img/hero-bg.jpg"
  },
  guides: {
    title: "Haustierpflege-Ratgeber",
    description: "Umfassendes Wissen für ein vitales und langes Haustierleben – direkt von unseren Experten.",
    image: "/img/hero-bg.jpg"
  }
};

const getCMSData = async () => {
    try {
        const data = await fs.readFile(cmsFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        // Create if not exists
        await saveCMSData(defaultCMS);
        return defaultCMS;
    }
};

const saveCMSData = async (data) => {
    await fs.writeFile(cmsFilePath, JSON.stringify(data, null, 2), 'utf8');
};

module.exports = {
    getCMSData,
    saveCMSData
};
