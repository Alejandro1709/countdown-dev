import { Router } from 'express'
import { handleCreateCountdown, handleGetCountdowns, handleGetSingleCountdown } from '../controllers/countdownController'

const router = Router()

router.route('/').get(handleGetCountdowns).post(handleCreateCountdown)

router.route('/:id').get(handleGetSingleCountdown)

export default router