import chai from 'chai'
import chaiHttp from 'chai-http'
import User from '../backend/models/User'
import userService from '../backend/services/userService'

import server from '../backend/server'

let should = chai.should()
let expect = chai.expect

chai.use(chaiHttp)

describe('Users', () => {
  beforeEach(done => {
    //Before each test we empty the database
    User.deleteMany({}, err => {
      done()
    })
  })

  describe('GET /', () => {
    it('should recieve "Hello World"', done => {
      chai
        .request(server)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.text).to.equal('Hello World')
          done()
        })
    })
  })

  describe('POST /user/register', () => {
    it('should create new user', done => {
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

      chai
        .request(server)
        .post('/user/register')
        .send(registerInfo)
        .end(async (err, res) => {
          const user = await User.findOne({ username: registerInfo.username })
          expect(res).to.have.status(200)
          expect(user.toObject()).to.deep.include(expected)
          done()
        })
    })
  })
})
