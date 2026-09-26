import User from "../models/User.model.js";

const createUser = async (userData) => {
    return User.create(userData);
};

const findById = async (userId) => {
    return User.findById(userId);
};

const findByEmail = async (email) => {
    return User.findOne({ email });
};

const findByIdWithPassword = async (userId) => {
    return User.findById(userId).select("+password");
};

const updateById = async (userId, updateData) => {
    return User.findByIdAndUpdate(
        userId,
        updateData,
        {
            new: true,
            runValidators: true,
        }
    );
};

const deleteById = async (userId) => {
    return User.findByIdAndDelete(userId);
};

export {
    createUser,
    findById,
    findByEmail,
    findByIdWithPassword,
    updateById,
    deleteById,
};