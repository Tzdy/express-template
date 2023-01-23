import { config } from 'dotenv-flow'
import express from 'express'
import { logicError } from '@tsdy/express-plugin-exception'
import router from './router/index.mjs'
import { modelInit } from './model/index.mjs'
import bodyParser from 'body-parser'
import { CorsMiddleware } from './middleware/cors.mjs'

const app = express()
config()
modelInit()

app.use(CorsMiddleware)
app.use(bodyParser.json())
app.use(process.env.SERVER_BASE, router)

app.use((err, req, res, next) => {
    logicError(err, res)
    next()
})


app.listen(Number(process.env.SERVER_PORT))