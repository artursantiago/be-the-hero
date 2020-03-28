const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())

/** Allow express convert request body to JSON
 *  Must be before the routes
 */
app.use(express.json())
app.use(routes)

app.listen(3333)