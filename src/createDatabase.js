const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')
require('dotenv').config()

// Connect to Cloud DATABASE (MongoDB Atlas)
const DATABASE_URL = process.env.MONGO_URI

mongoose.connect(DATABASE_URL);

const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', async () => {
    console.log('Database connected...')

    try {
        await subscriberModel.deleteMany({})
        await subscriberModel.insertMany(data)
        console.log('Sample data inserted successfully!')
    } catch (err) {
        console.error(err)
    } finally {
        await mongoose.disconnect()
    }
})