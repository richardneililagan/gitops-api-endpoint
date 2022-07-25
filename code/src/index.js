import crypto from 'node:crypto'
import express from 'express'

// :: ---

/**
 * The number of iterations that the app will do to hash a string.
 * @default 5e6
 */
const ITERATIONS = Number(process.env.APP_ITERATIONS) || 1e6

// :: ---

const app = express()

// :: HTTP GET /
app.get('/', (_, response) => {
  // :: Create an input seed from the current timestamp.
  let _output = String(Date.now())

  for (let count = 0; count < ITERATIONS; count += 1) {
    _output = crypto.createHash('sha256').update(_output).digest('hex')
  }

  response.send(_output)
})

app.listen(3000, '0.0.0.0', () => {
  console.log('App server ready.')
})
