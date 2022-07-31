import { Router } from 'express'
import { handleGetCountdowns } from '../controllers/countdownController'

const router = Router()

router.route('/').get(handleGetCountdowns)

export default router