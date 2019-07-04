import chai from 'chai'
import User from '../backend/models/User'
import userService from '../backend/services/userService'

let expect = chai.expect

describe('userService', () => {
  beforeEach(done => {
    User.deleteMany({}, err => {
      done()
    })
  })

  describe('createNewUser', () => {
    it('should create new user', async () => {
      const expected = {
        username: 'test',
        preferences: {
          language: 'en',
          timeZone: '+7:00',
          currency: 'USD',
          profileVisibility: 'everyone',
          recieveMessages: 'everyone',
          recentlyViewed: [],
          autoAddCategoryList: 'disabled',
        },
      }

      const registerInfo = {
        username: 'test',
        password: 'test',
      }

      const existingUser = await User.findOne({
        username: registerInfo.username,
      })

      expect(existingUser).to.not.exist

      await userService.createNewUser(
        registerInfo.username,
        registerInfo.password,
      )

      const addedUser = await User.findOne({ username: registerInfo.username })

      expect(addedUser.toObject()).to.deep.include(expected)
    })
  })
})
