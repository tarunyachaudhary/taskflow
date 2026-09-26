import Session from "../models/Session.model.js";

const createSession = async (sessionData) => {
    return Session.create(sessionData);
};

const findById = async (sessionId) => {
    return Session.findById(sessionId);
};

const findByUserId = async (userId) => {
    return Session.find({
        userId,
    }).sort({
        createdAt: -1,
    });
};

const findByRefreshTokenHash = async (
    refreshTokenHash
) => {
    return Session.findOne({
        refreshTokenHash,
    });
};

const deleteById = async (sessionId) => {
    return Session.findByIdAndDelete(sessionId);
};

const deleteAllByUserId = async (userId) => {
    return Session.deleteMany({
        userId,
    });
};

export {
    createSession,
    findById,
    findByUserId,
    findByRefreshTokenHash,
    deleteById,
    deleteAllByUserId,
};