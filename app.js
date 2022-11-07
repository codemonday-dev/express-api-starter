import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import router from './src/routes'

const app = express()

app.use(cors({ origin: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/', router)

// LAST MATCH: CHECK API IS RUNNING
app.get('/', (req, res) => {
  res.json({ app: 'Express', timestampe: Date.now() })
})

app.listen(process.env.PORT, () => {
  console.info(`API Service start running at ${process.env.PORT}`)
})