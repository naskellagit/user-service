import { Router } from "express"
import { authMiddleware } from "../../middlewares/auth.middleware"
import * as controller from './user.controller'
import { onlyAdminMiddleware } from "../../middlewares/onlyAdmin.middlewaire"

const router = Router()

router.get('/', authMiddleware, onlyAdminMiddleware, controller.getAll)
router.get('/:id', authMiddleware, controller.getById)
router.patch('/:id/block', authMiddleware, controller.userBlock)

export default router