import chai from 'chai'
import chaiHttp from 'chai-http'
import User from '../backend/models/User'
import userService from '../backend/services/userService'

import server from '../backend/server'

let should = chai.should()
let expect = chai.expect

chai.use(chaiHttp)

before(done => {
  User.deleteMany({}, err => {
    done()
  })
})

after(() => {
  User.deleteMany({}, err => {})
})

describe('routes', () => {
  const userInfo = {
    username: 'test',
    password: 'test',
  }

  let accessToken = null

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
    it('should create new user if not exist', done => {
      const expected = {
        username: 'test',
        preferences: {
          language: 'en',
          timeZone: '+07:00',
          currency: 'USD',
          profileVisibility: 'everyone',
          recieveMessages: 'everyone',
          recentlyViewed: [],
          autoAddCategoryList: 'disabled',
        },
      }

      chai
        .request(server)
        .post('/user/register')
        .send(userInfo)
        .end(async (err, res) => {
          const user = await User.findOne({ username: userInfo.username })
          expect(res).to.have.status(200)
          expect(user.toObject()).to.deep.include(expected)
          done()
        })
    })

    it('should return 400 if user already exist', done => {
      chai
        .request(server)
        .post('/user/register')
        .send(userInfo)
        .end(async (err, res) => {
          const user = await User.findOne({ username: userInfo.username })
          expect(res).to.have.status(400)
          done()
        })
    })
  })

  describe('POST /user/login', () => {
    it('should return 200 if username and password matched', done => {
      chai
        .request(server)
        .post('/user/login')
        .send(userInfo)
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body.token).to.exist
          accessToken = res.body.token
          done()
        })
    })

    it('should return 401 if username and password is wrong', done => {
      chai
        .request(server)
        .post('/user/login')
        .send({ username: userInfo.username, password: 'wrongpassword' })
        .end((err, res) => {
          expect(res).to.have.status(401)
          done()
        })
    })
  })

  describe('GET /user', () => {
    it('should return correct user for the specified token', done => {
      chai
        .request(server)
        .get('/user')
        .set('Authorization', `Bearer ${accessToken}`)
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body.username).to.equal(userInfo.username)
          done()
        })
    })

    it('should return 401 for invalid token', done => {
      chai
        .request(server)
        .get('/user')
        .set('Authorization', `Bearer FAKETOKEN`)
        .end((err, res) => {
          expect(res).to.have.status(401)
          done()
        })
    })
  })

  describe('POST /user/preferences/update', () => {
    const preferences = {
      language: 'th',
      timeZone: '+03:00',
      currency: 'THB',
      profileVisibility: 'private',
      recieveMessages: 'everyone',
      recentlyViewed: [],
      autoAddCategoryList: 'disabled',
    }

    it('should return updated preferences on success', done => {
      chai
        .request(server)
        .post('/user/preferences/update')
        .set('Authorization', `Bearer ${accessToken}`)
        .send(preferences)
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.body).to.eql(preferences)
          done()
        })
    })

    it('should return 401 for invalid token', done => {
      chai
        .request(server)
        .post('/user/preferences/update')
        .set('Authorization', `Bearer FAKETOKEN`)
        .send(preferences)
        .end((err, res) => {
          expect(res).to.have.status(401)
          done()
        })
    })
  })
})
