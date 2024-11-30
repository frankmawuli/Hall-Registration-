import express from 'express';
import {addUser, checkAuth, login,logout} from "../Controllers/AuthControllers.js"
import { verifyToken } from '../utils/verifyToken.js';

const router = express()
export default router;





//Login a user
router.post('/login', login);


//logout a user
router.post('/logout', logout);



//Check Auth 
router.get ('/checkAuth',verifyToken,checkAuth)



//Add a user 
router.post('/register', addUser);
//Delete a user
router.delete('/delete', (req, res) => {
    res.send('User deleted');
});


//Update a user
router.put('/update', (req, res) => {
    res.send('User updated');
});

//Find a user 
router.get('/find', (req, res) => {
    res.send('User found');
});