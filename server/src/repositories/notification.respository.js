import Notification from "../models/Notification.model.js";

const createNotification = async (notificationData) => {
    return Notification.create(notificationData);
};

const findById = async (notificationId, userId) => {
    return Notification.findOne({
        _id: notificationId,
        userId,
    });
};

const findByUserId = async (
    userId,
    options = {}
) => {
    const {
        page = 1,
        limit = 20,
    } = options;

    const skip = (page - 1) * limit;

    const [notifications, total] = await Promise.all([
        Notification.find({ userId })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit),

        Notification.countDocuments({ userId }),
    ]);

    return {
        notifications,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
    };
};

const markAsRead = async (
    notificationId,
    userId
) => {
    return Notification.findOneAndUpdate(
        {
            _id: notificationId,
            userId,
        },
        {
            isRead: true,
        },
        {
            new: true,
        }
    );
};

const markAllAsRead = async (userId) => {
    return Notification.updateMany(
        {
            userId,
            isRead: false,
        },
        {
            isRead: true,
        }
    );
};

const deleteById = async (
    notificationId,
    userId
) => {
    return Notification.findOneAndDelete({
        _id: notificationId,
        userId,
    });
};

export {
    createNotification,
    findById,
    findByUserId,
    markAsRead,
    markAllAsRead,
    deleteById,
};