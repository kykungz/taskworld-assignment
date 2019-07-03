import mongoose from 'mongoose'
import querystring from 'querystring'

export default {
  connect: async () => {
    const protocal = 'mongodb'
    const host = 'localhost'
    const port = 27017
    const username = 'jacky'
    const password = 'jacky'
    const database = 'taskworld'

    const options = querystring.stringify({
      authSource: 'admin',
      retryWrites: true,
    })

    const mongooseOptions = {
      useNewUrlParser: true,
    }

    await mongoose.connect(
      `${protocal}://${username}:${password}@${host}:${port}/${database}?${options}`,
      mongooseOptions,
    )
  },
}
