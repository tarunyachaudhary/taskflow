import Category from "../models/Category.model.js";

const createCategory = async (categoryData) => {
    return Category.create(categoryData);
};

const findById = async (categoryId, userId) => {
    return Category.findOne({
        _id: categoryId,
        userId,
    });
};

const findAllByUser = async (userId) => {
    return Category.find({
        userId,
    }).sort({
        name: 1,
    });
};

const updateCategory = async (
    categoryId,
    userId,
    updateData
) => {
    return Category.findOneAndUpdate(
        {
            _id: categoryId,
            userId,
        },
        updateData,
        {
            new: true,
            runValidators: true,
        }
    );
};

const deleteCategory = async (categoryId, userId) => {
    return Category.findOneAndDelete({
        _id: categoryId,
        userId,
    });
};

export {
    createCategory,
    findById,
    findAllByUser,
    updateCategory,
    deleteCategory,
};