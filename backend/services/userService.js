import User from '../models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from '../config'

class UserService {
  async createNewUser(username, password) {
    const existingUser = await User.findOne({ username })

    if (!existingUser) {
      const hashed = await bcrypt.hash(password, 8)
      const user = new User({ username, password: hashed })
      await user.save()
      return user
    }

    throw new Error('User already exists')
  }

  async getUserByUsername(username) {
    const user = await User.findOne({ username })
    return user
  }

  async getUserById(id) {
    try {
      const user = await User.findById(id)
      return user
    } catch (error) {
      return null
    }
  }

  async login(username, password) {
    const user = await this.getUserByUsername(username)
    if (user) {
      const authorized = await bcrypt.compare(password, user.password)
      if (authorized) {
        const payload = { username: user.username }
        const claims = {
          expiresIn: '30d',
          issuer: 'taskworld.com',
          audience: 'taskworld.com',
          subject: user._id.toString(),
        }
        const secret = config.JWT_SECRET
        return jwt.sign(payload, secret, claims)
      }
      throw new Error('Incorrect password')
    }
    throw new Error('User not found')
  }

  async updatePreferences(userId, preferences) {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { preferences },
      {
        new: true,
        overwrite: true,
      },
    )
    return updatedUser.preferences
  }
}

export default new UserService()
