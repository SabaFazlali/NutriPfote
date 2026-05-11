const questionService = require('../services/questionService');
const { validationResult } = require('express-validator');

const getConsultation = (req, res) => {
    res.render('consultation', {
        title: 'Beratung - NutriPfote',
        errors: [],
        formData: {},
        success: false
    });
};

const postConsultation = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.render('consultation', {
            title: 'Beratung - NutriPfote',
            errors: errors.array(),
            formData: req.body,
            success: false
        });
    }

    await questionService.createQuestion({
        name: req.body.name,
        email: req.body.email,
        animalType: req.body.animalType,
        topic: req.body.topic,
        preferredTime: req.body.preferredTime || '',
        message: req.body.message
    });

    res.render('consultation', {
        title: 'Beratung - NutriPfote',
        errors: [],
        formData: {},
        success: true
    });
};

module.exports = {
    getConsultation,
    postConsultation
};
