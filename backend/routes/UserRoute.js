import express from 'express'
import  {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
    
} from '../controller/Users.js'

const router= express.Router();
import { verifyUser ,adminOnly} from '../middleware/AuthUser.js';

router.get('/users', verifyUser,adminOnly,getUsers)
router.get('/users/:id',verifyUser,adminOnly,getUserById)
router.post('/users',verifyUser,adminOnly,createUser)
router.patch('/users/:id',verifyUser,adminOnly,updateUser)
router.delete('/users/:id',verifyUser,adminOnly,deleteUser)

export default router;