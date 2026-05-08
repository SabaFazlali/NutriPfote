const { readJSON, writeJSON } = require('../utils/jsonReader');

const getAllOrders = async () => {
    try {
        return await readJSON('orders.json');
    } catch (error) {
        return [];
    }
};

const getOrdersByUserId = async (userId) => {
    const orders = await getAllOrders();
    return orders.filter(order => order.userId === userId);
};

const createOrder = async (orderData) => {
    const orders = await getAllOrders();
    
    const newOrder = {
        id: 'ord-' + Date.now(),
        date: new Date().toISOString(),
        ...orderData
    };
    
    orders.push(newOrder);
    await writeJSON('orders.json', orders);
    return newOrder;
};

module.exports = {
    getAllOrders,
    getOrdersByUserId,
    createOrder
};
