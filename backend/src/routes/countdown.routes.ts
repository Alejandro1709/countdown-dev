import { Router } from 'express'
import { handleCreateCountdown, handleGetCountdowns, handleGetSingleCountdown, handleEditCountdown } from '../controllers/countdownController'

const router = Router()

router.route('/').get(handleGetCountdowns).post(handleCreateCountdown)

router.route('/:id').get(handleGetSingleCountdown).patch(handleEditCountdown)

export default router