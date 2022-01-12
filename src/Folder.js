const { Schema, model } = require('mongoose')

const folderSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        parantFolderId: {
            type: Schema.Types.ObjectId,
            ref: 'Folder',
        }, 
        folders: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Folder'
            }
        ]
    }
)

const Folder = model('Folder', folderSchema)
module.exports = Folder