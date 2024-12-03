import User from '../Models/Authmodel.js';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';


import generateTokenAndCookie from '../utils/generateJWT.js';

//Add a user by Admin


export const addUser = async (req, res) => {
    const { name, email, studentId, role, password } = req.body;

    // Input Validation
    if (!name || !email || !studentId || !password ) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }
    if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    try {
        // Check for existing user
        const existingUser = await User.findOne({
            $or: [{ email }, { studentId }],
        });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const user = new User({
            name,
            email,
            studentId,
            role: role || 'student', // Default role if not provided
            password: hashedPassword,
        });

        await user.save();

        // Respond with success
        res.status(201).json({ message: 'User created successfully', user: { name, email, studentId, role } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while creating the user' });
    }
};



//Login a user
export const login = async (req, res) => {
    const { studentId, password } = req.body;

    try {
        if(!studentId || !password){
            return res.status(400).json({message : "Please enter all fields"})
        }
        const user = await User.findOne({studentId})
        if (!user) {
            return res.status(404).json({ error: 'User not found', success: false });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials', success: false });
        }

        // Generate token and cookie
       generateTokenAndCookie(res, user._id)
       user.lastLogin = Date.now()
       await user.save()
       res.status(200).json({   
            success : true,
            message :"Log in Successful",
            user


       })


    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while logging in', success: false });
    }
};

//Logout a user
export const logout = async (req, res) => {
    try {
        res.clearCookie('token')
        res.status(200).json({ success: true, message: 'Logout successful' })

    } catch (err) {
        console.log(`Error Logging out ${err}`)
    }
};



//Check if a user is logged in
export const checkAuth = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.userId)) {
            return res.status(400).json({ success: false, message: "Invalid User ID" });
        }

        const user = await User.findById(req.userId).select('-password');
        if (!user) return res.status(400).json({ success: false, message: "User not found" });
        res.status(200).json({ success: true, user });
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};



//Delete a user 
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.remove();
        res.status(200).json({ message: 'User deleted successfully' });
    
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while deleting the user' });
    }
};


export const findUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User found', user });
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while finding the user' });
    }  
};

