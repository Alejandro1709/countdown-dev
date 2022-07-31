import { Router } from 'express'
import { handleGetCountdowns, handleGetSingleCountdown } from '../controllers/countdownController'

const router = Router()

router.route('/').get(handleGetCountdowns)

router.route('/:id').get(handleGetSingleCountdown)

export default router