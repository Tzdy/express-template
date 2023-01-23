import { Router } from 'express'
import hello from './helloworld.mjs'

const router = Router()
router.use(hello)

export default router