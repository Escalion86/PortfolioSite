import mongoose from 'mongoose'
import codesSchema from '@schemas/codesSchema'

const CodesSchema = new mongoose.Schema(codesSchema, { timestamps: true })

export default mongoose.models.Codes || mongoose.model('Codes', CodesSchema)
