import { Router } from 'express'
const router = Router()

import { pongController } from './controllers/shares'

// SHARE
router.get('/ping', pongController)

export default router
