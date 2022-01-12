/*
* Folder Structure Router Handler
*/

const router = require('express').Router()
const Folder = require('./Folder')


// Get Folders Request
router.get('/', async (req, res, next) => {
    try {
        const folders = await Folder.find()
        res.status(200).json({ folders })
    } catch (err) {
        res.status(500)
    }
})


//New Folder Create
/*
Example of data for post request
{
    "folderName": "4u9d48093459fu9uv8g945g9",
    "parantFolderId":  "89fer98g493439qu943g943g"
}
*/
router.post('/create', async (req, res, next) => {
    try {
        const newFolder = new Folder({
            name: req.body.folderName,
            parantFolderId: req.body.parantFolderId
        })
        await newFolder.save()
            .then(async (saved) => {
                //Insert new Folder id(_id) to its parant folder
                await Folder.findByIdAndUpdate(req.body.parantFolderId, { $push: { folders: saved._id } })
                    .then(result => {
                        res.status(200).json(result)
                    })
                    .catch((err => res.json(err)))
            })
            .catch((err => res.json(err)))
    } catch (err) {
        res.status(500)
    }
})



// Delete a folder
/*
Example of data for post request
{
    "folderId": "4u9d48093459fu9uv8g945g9",
    "parantFolderId":  "89fer98g493439qu943g943g"
}
*/
router.post('/delete', async (req, res, next) => {
    const _id = req.body.folderId;
    try {
        await Folder.findByIdAndUpdate(req.body.parantFolderId, { $pull: { folders: _id } })
            .then(async (edited) => {
                await Folder.findByIdAndDelete(_id)
                    .then(succes => res.json({ "message": "Folder Deleted" }))
                    .catch((err => res.json(err)))
            })
            .catch((err => res.json(err)))

    } catch (err) {
        res.status(501);
    }
})

module.exports = router