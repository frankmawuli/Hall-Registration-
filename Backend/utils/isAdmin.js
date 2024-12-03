import User from "../Models/Authmodel.js";

export default async function isAdmin(req, res, next) {
    try {
        const user = await User.findById(req.user.id);
        if (user.role !== 'admin') {
            return res.status(401).json({ message: 'Not authorized' });
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
}