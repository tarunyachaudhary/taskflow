import Settings from "../models/Settings.model.js";

const createSettings = async (settingsData) => {
    return Settings.create(settingsData);
};

const findByUserId = async (userId) => {
    return Settings.findOne({
        userId,
    });
};

const updateByUserId = async (
    userId,
    updateData
) => {
    return Settings.findOneAndUpdate(
        {
            userId,
        },
        updateData,
        {
            new: true,
            runValidators: true,
            upsert: true,
        }
    );
};

const deleteByUserId = async (userId) => {
    return Settings.findOneAndDelete({
        userId,
    });
};

export {
    createSettings,
    findByUserId,
    updateByUserId,
    deleteByUserId,
};