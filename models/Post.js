const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    
   title: {
    type: String,
    requires: true
    },
   description: {
    type: String,
    requires: true
    },
   date: {
    type: Date,
    default: Date
    }

});

module.exports = mongoose.model('Posts', PostSchema);