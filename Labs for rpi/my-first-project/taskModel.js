import mongoose, { mongo } from "mongoose";

const taskSchema = new mongoose.Schema({
    id: String,
    desctription: String,
    status: String
});

export const TaskModel = mongoose.model('Task', taskSchema);