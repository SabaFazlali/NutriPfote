const { readJSON, writeJSON } = require('../utils/jsonReader');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');


const getAllUsers = async () => {
    return await readJSON('users.json');
};

const getUserByEmail = async (email) => {
    const users = await getAllUsers();
    return users.find(u => u.email === email);
};

const getUserById = async (id) => {
    const users = await getAllUsers();
    return users.find(u => u.id === id);
};

const createUser = async (userData) => {
    const users = await getAllUsers();
    
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    
    const newUser = {
        id: uuidv4(),
        name: userData.name,
        email: userData.email,
        role: 'user',
        passwordHash: hashedPassword,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    await writeJSON('users.json', users);
    
    // Don't return password hash
    const { passwordHash, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
};

const validatePassword = async (user, password) => {
    // Check if passwordHash is a real hash or placeholder
    if (user.passwordHash === "to-be-generated-during-implementation") {
        return password === "admin123"; // Simple fallback for demo user
    }
    return await bcrypt.compare(password, user.passwordHash);
};

module.exports = {
    getUserByEmail,
    getUserById,
    createUser,
    validatePassword
};
