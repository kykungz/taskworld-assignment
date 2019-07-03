import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    preferences: {
      language: { type: String, required: true, default: 'en' },
      timeZone: { type: String, required: true, default: '+7:00' },
      currency: { type: String, required: true, default: 'USD' },
      profileVisibility: { type: String, required: true, default: 'everyone' },
      recieveMessages: { type: String, required: true, default: 'everyone' },
      autoAddCategoryList: {
        type: String,
        required: true,
        default: 'disabled',
      },
    },
    recentlyViewed: {
      type: Array,
      required: true,
      default: [],
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('User', UserSchema)
