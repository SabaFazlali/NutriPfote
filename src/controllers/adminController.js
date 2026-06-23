const productService = require('../services/productService');
const guideService = require('../services/guideService');
const orderService = require('../services/orderService');
const questionService = require('../services/questionService');
const cmsService = require('../services/cmsService');

const isAdmin = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }

    if (req.session.user.role !== 'admin') {
        return res.status(403).send('Nur fuer das Shop-Team erlaubt.');
    }

    next();
};

const splitList = (value) => {
    if (!value) return [];
    return value.split(',').map(item => item.trim()).filter(Boolean);
};

const parseVariants = (value) => {
    return splitList(value).map(item => {
        const [size, price, stock] = item.split('|').map(part => part.trim());
        return {
            size: size || '1 kg',
            price: Number(price) || 0,
            stock: Number(stock) || 0
        };
    });
};

const parseFeedingAmounts = (value) => {
    return splitList(value).map(item => {
        const [weightClass, amount] = item.split('|').map(part => part.trim());
        return {
            weightClass: weightClass || 'normal',
            amount: amount || ''
        };
    });
};

const buildProductFromBody = (body) => ({
    name: body.name,
    animalType: body.animalType,
    category: body.category || 'Futter',
    lifeStage: body.lifeStage,
    weightClasses: splitList(body.weightClasses),
    purpose: body.purpose,
    allergyTags: splitList(body.allergyTags),
    ecoFriendly: body.ecoFriendly === 'on',
    shortDescription: body.shortDescription,
    description: body.description,
    image: body.image || '/img/hero-bg.jpg',
    variants: parseVariants(body.variants),
    nutrition: {
        protein: body.protein || '',
        fat: body.fat || '',
        fiber: body.fiber || '',
        digestibility: body.digestibility || ''
    },
    feedingAmounts: parseFeedingAmounts(body.feedingAmounts),
    feedingInstructions: body.feedingInstructions || '',
    careInstructions: body.careInstructions || '',
    guideIds: splitList(body.guideIds)
});

const buildGuideFromBody = (body) => ({
    title: body.title,
    animalType: body.animalType,
    topic: body.topic,
    categoryColor: body.categoryColor || '#6B9A78',
    image: body.image || '/img/hero-bg.jpg',
    summary: body.summary,
    content: body.content,
    allergyTags: splitList(body.allergyTags),
    relatedProductIds: splitList(body.relatedProductIds)
});

const getAdminHome = async (req, res) => {
    const [products, guides, orders, questions] = await Promise.all([
        productService.getAllProducts(),
        guideService.getAllGuides(),
        orderService.getAllOrders(),
        questionService.getAllQuestions()
    ]);

    res.render('admin/index', { products, guides, orders, questions });
};

const getProducts = async (req, res) => {
    const products = await productService.getAllProducts();
    res.render('admin/products', { products, product: null, mode: 'create' });
};

const getEditProduct = async (req, res) => {
    const products = await productService.getAllProducts();
    const product = await productService.getProductById(req.params.id);
    res.render('admin/products', { products, product, mode: 'edit' });
};

const postProduct = async (req, res) => {
    await productService.createProduct(buildProductFromBody(req.body));
    res.redirect('/admin/products');
};

const postEditProduct = async (req, res) => {
    await productService.updateProduct(req.params.id, buildProductFromBody(req.body));
    res.redirect('/admin/products');
};

const postDeleteProduct = async (req, res) => {
    await productService.deleteProduct(req.params.id);
    res.redirect('/admin/products');
};

const getGuides = async (req, res) => {
    const guides = await guideService.getAllGuides();
    res.render('admin/guides', { guides, guide: null, mode: 'create' });
};

const getEditGuide = async (req, res) => {
    const guides = await guideService.getAllGuides();
    const guide = await guideService.getGuideById(req.params.id);
    res.render('admin/guides', { guides, guide, mode: 'edit' });
};

const postGuide = async (req, res) => {
    await guideService.createGuide(buildGuideFromBody(req.body));
    res.redirect('/admin/guides');
};

const postEditGuide = async (req, res) => {
    await guideService.updateGuide(req.params.id, buildGuideFromBody(req.body));
    res.redirect('/admin/guides');
};

const postDeleteGuide = async (req, res) => {
    await guideService.deleteGuide(req.params.id);
    res.redirect('/admin/guides');
};

const getOrders = async (req, res) => {
    const orders = await orderService.getAllOrders();
    res.render('admin/orders', { orders });
};

const getQuestions = async (req, res) => {
    const questions = await questionService.getAllQuestions();
    res.render('admin/questions', { questions });
};

const getCMS = async (req, res) => {
    try {
        const cmsData = await cmsService.getCMSData();
        res.render('admin/cms', { cmsData });
    } catch (error) {
        console.error("Error loading CMS data:", error);
        res.status(500).send("Internal Server Error");
    }
};

const postCMS = async (req, res) => {
    try {
        const { homeTitle, homeDesc, homeImage, shopTitle, shopDesc, shopImage, guidesTitle, guidesDesc, guidesImage } = req.body;
        const cmsData = {
            home: { title: homeTitle, description: homeDesc, image: homeImage },
            shop: { title: shopTitle, description: shopDesc, image: shopImage },
            guides: { title: guidesTitle, description: guidesDesc, image: guidesImage }
        };
        await cmsService.saveCMSData(cmsData);
        res.redirect('/admin/cms');
    } catch (error) {
        console.error("Error saving CMS data:", error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    isAdmin,
    getAdminHome,
    getProducts,
    getEditProduct,
    postProduct,
    postEditProduct,
    postDeleteProduct,
    getGuides,
    getEditGuide,
    postGuide,
    postEditGuide,
    postDeleteGuide,
    getOrders,
    getQuestions,
    getCMS,
    postCMS
};
