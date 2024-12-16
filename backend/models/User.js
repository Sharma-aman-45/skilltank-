const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    skills: [{
        name: String,
        proficiency: Number
    }],
    projects: [{
        title: String,
        description: String,
        completionDate: Date,
        rating: Number
    }],
    certifications: [{
        name: String,
        rating: Number,
        issueDate: Date
    }],
    profileImage: {
        type: String,
        default: ''
    },
    overallRating: {
        type: Number,
        default: 0
    },
    completedProjects: {
        type: Number,
        default: 0
    },
    proficientSkills: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

// Hash password before saving


const User = mongoose.model('User', userSchema);
module.exports = User; 