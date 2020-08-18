const mongoose = require('mongoose');

const timeSlotSchema = new mongoose.Schema({
    timeTableID: {
        type: String,
        required: true
      },
    timeTableType: {
        type: String,
        required: true
    },
    timeSlotsStartTimes: {
        type: String,
        required: true
    },
    timeSlotsEndTimes: {
        type: String,
        required: true
    }
},{
  timestamps: true
});

module.exports = mongoose.model('timeSlot', timeSlotSchema);
