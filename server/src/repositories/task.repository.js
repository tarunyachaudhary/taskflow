import Task from "../models/Task.model.js";

const createTask = async (taskData) => {
    return Task.create(taskData);
};

const findById = async (taskId, userId) => {
    return Task.findOne({
        _id: taskId,
        userId,
    });
};

const findTasks = async (filter, options = {}) => {
    const {
        page = 1,
        limit = 20,
        sortBy = "createdAt",
        sortOrder = "desc",
    } = options;

    const skip = (page - 1) * limit;

    const sort = {
        [sortBy]: sortOrder === "asc" ? 1 : -1,
    };

    const [tasks, total] = await Promise.all([
        Task.find(filter)
            .sort(sort)
            .skip(skip)
            .limit(limit),

        Task.countDocuments(filter),
    ]);

    return {
        tasks,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
    };
};

const updateTask = async (taskId, userId, updateData) => {
    return Task.findOneAndUpdate(
        {
            _id: taskId,
            userId,
        },
        updateData,
        {
            new: true,
            runValidators: true,
        }
    );
};

const deleteTask = async (taskId, userId) => {
    return Task.findOneAndDelete({
        _id: taskId,
        userId,
    });
};

const countTasks = async (filter) => {
    return Task.countDocuments(filter);
};

const findTasksByDateRange = async (
    userId,
    startDate,
    endDate
) => {
    return Task.find({
        userId,
        dueDate: {
            $gte: startDate,
            $lte: endDate,
        },
    }).sort({
        dueDate: 1,
    });
};

export {
    createTask,
    findById,
    findTasks,
    updateTask,
    deleteTask,
    countTasks,
    findTasksByDateRange,
};