import userService from '../services/userService'
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt'
import passport from 'passport'
import config from '../config'

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.JWT_SECRET,
  issuer: 'taskworld.com',
  audience: 'taskworld.com',
}

const jwtAuth = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const userId = payload.sub
    const userDoc = await userService.getUserById(userId)
    const user = {
      _id: userDoc._id,
      username: userDoc.username,
      preferences: userDoc.preferences,
    }

    if (user) {
      return done(null, user)
    } else {
      return done(null, false)
    }
  } catch (error) {
    return done(error, false)
  }
})

passport.use(jwtAuth)

export default passport.authenticate('jwt', { session: false })
