import mongoose from 'mongoose'
import codesCheckHistorySchema from '@schemas/codesCheckHistorySchema'

const CodesCheckHistorySchema = new mongoose.Schema(codesCheckHistorySchema, {
  timestamps: true,
})

export default mongoose.models.CodesCheckHistory ||
  mongoose.model('CodesCheckHistory', CodesCheckHistorySchema)
