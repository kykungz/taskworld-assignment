import User from '../models/User'
import bcrypt from 'bcryptjs'

class UserService {
  async createNewUser(username, password) {
    const hashed = await bcrypt.hash(password, 8)

    const user = new User({
      username,
      password: hashed,
    })

    await user.save()

    return user
  }

  async getUserByUsername(username) {
    const user = await User.findOne({ username })
    return user
  }

  async login(username, password) {
    const user = await this.getUserByUsername(username)
    if (user) {
      const authorized = await bcrypt.compare(password, user.password)
      if (authorized) {
        const payload = {
          username: user.username,
        }
        const claims = {
          expiresIn: '30d',
          issuer: 'taskworld.com',
          audience: 'taskworld.com',
          subject: user._id.toString(),
        }
        const secret = 'taskworld-secret'
        return jwt.sign(payload, secret, claims)
      }
      throw new Error('Incorrect password')
    }
    throw new Error('User not found')
  }
}

export default new UserService()
