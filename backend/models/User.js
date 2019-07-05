import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    preferences: {
      language: { type: String, required: true, default: 'en' },
      timeZone: { type: String, required: true, default: '+07:00' },
      currency: { type: String, required: true, default: 'USD' },
      profileVisibility: { type: String, required: true, default: 'everyone' },
      recieveMessages: { type: String, required: true, default: 'everyone' },
      recentlyViewed: {
        type: Array,
        required: true,
        default: [],
      },
      autoAddCategoryList: {
        type: String,
        required: true,
        default: 'disabled',
      },
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('User', UserSchema)
