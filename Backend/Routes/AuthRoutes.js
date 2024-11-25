import express from 'express';
const router = express()
export default router;

//Add a user 
router.post('/register', (req, res) => {
    res.send('User registered');
});



//Login a user
router.post('/login', (req, res) => {
    res.send('User logged in');
});


//logout a user
router.post('/logout', (req, res) => {
    res.send('User logged out');
});


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