import { Router } from 'express'
import { handleCreateCountdown, handleGetCountdowns, handleGetSingleCountdown, handleEditCountdown, handleDeleteCountdown } from '../controllers/countdownController'

const router = Router()

router.route('/').get(handleGetCountdowns).post(handleCreateCountdown)

router.route('/:id').get(handleGetSingleCountdown).patch(handleEditCountdown).delete(handleDeleteCountdown)

export default router