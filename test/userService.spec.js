import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import User from '../backend/models/User'
import userService from '../backend/services/userService'

chai.use(chaiAsPromised)

let expect = chai.expect

describe('userService', () => {
  beforeEach(async () => {
    await User.deleteMany({})
  })

  const userInfo = {
    username: 'test',
    password: 'test',
  }

  describe('createNewUser', () => {
    it('should create new user if not exist', async () => {
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
      const existingUser = await User.findOne({
        username: userInfo.username,
      })
      expect(existingUser).to.not.exist
      await userService.createNewUser(userInfo.username, userInfo.password)
      const addedUser = await User.findOne({ username: userInfo.username })
      expect(addedUser.toObject()).to.deep.include(expected)
    })

    it('should throw error if user already exist', async () => {
      await new User(userInfo).save()

      const existingUser = await User.findOne({
        username: userInfo.username,
      })

      expect(existingUser).to.exist

      const createNewUser = userService.createNewUser(
        userInfo.username,
        userInfo.password,
      )

      await expect(createNewUser).to.be.rejected
    })
  })

  describe('getUserByUsername', () => {
    beforeEach(async () => {
      const testUser = new User({
        username: userInfo.username,
        password: userInfo.password,
      })
      await testUser.save()
    })

    it('should return correct user with input username', async () => {
      const user = await userService.getUserByUsername(userInfo.username)
      expect(user.username).to.equal(userInfo.username)
    })

    it('should return null when user does not exist', async () => {
      const user = await userService.getUserByUsername('user does not exist')
      expect(user).to.be.null
    })
  })

  describe('getUserById', () => {
    let userId = null

    beforeEach(async () => {
      const user = new User(userInfo)
      await user.save()
      userId = user._id
    })

    it('should return correct user with input user id', async () => {
      const user = await userService.getUserById(userId)
      expect(user._id).to.eql(userId)
      expect(user.username).to.equal(userInfo.username)
    })

    it('should return null when user does not exist', async () => {
      const user = await userService.getUserById('user does not exist')
      expect(user).to.be.null
    })
  })
})
