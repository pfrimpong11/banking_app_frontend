const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.registerUser = async (req, res) => {
    const { firstName, lastName, dateOfBirth, phoneNumber, email, ghanaCardNumber, address, password } = req.body;

    try {
        // Check if phone number, email, or Ghana card number already exist
        const existingUser = await User.findOne({
            $or: [
                { phoneNumber },
                { email },
                { ghanaCardNumber }
            ]
        });

        if (existingUser) {
            return res.status(400).json({ message: 'Phone number, email, or Ghana card number already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            dateOfBirth,
            phoneNumber,
            email,
            ghanaCardNumber,
            address,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
        console.log("user registered successfully");
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
        console.log("Error registering user");
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'User logged in successfully', user });
        console.log("User login successful");
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
        console.log("user login failed");
    }
};
