import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    preferences: {
      language: { type: String, required: true },
      currency: { type: String, required: true },
      timeZone: { type: String, required: true },
      profileVisibility: { type: String, required: true },
      receiveMessagesFrom: { type: String, required: true },
      autoAddToCategoryList: { type: String, required: true },
      smsNotifications: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.model('User', UserSchema)
