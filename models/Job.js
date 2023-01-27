const mongoose = require('mongoose');

const JobSchema = mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Please provide the company name'],
        maxlengh: 50
    },
    position: {
        type: String,
        required: [true, 'Please provide position'],
        maxlengh: 100
    },
    status: {
        type: String,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending'
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user']
    }
}, {timestamps: true});

module.exports = mongoose.model('Job', JobSchema);