import { Schema, model } from "mongoose";

const fileSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const FileModel = new model('file', fileSchema)
export default FileModel

