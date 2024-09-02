import express from 'express'
import 'dotenv/config'
import cloudinary from './utils/cloudinary.js'
import cors from 'cors'
import upload from './middleware/multer.js'
import FileModel from './model/fileModel.js'
import mongoose from 'mongoose'

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)

app.get('/', (req, res) => {
    res.json('Hello from Cloudinary Express Server')
})

app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const { imageTitle } = req.body

        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'express-cloudinary',
            width: 500,
            height: 500,
            crop: 'fill'
        })

        const file = await FileModel.create({
            title: imageTitle,
            imageURL: result.secure_url
        })
   
        
        res.json({message: 'Image uploaded to Cloudinary'})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

app.get('/images', async (req, res) => {
    try {
        const files = await FileModel.find()
        res.json(files)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


app.listen(process.env.PORT)
