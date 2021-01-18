const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CauHoiSchema = new Schema({
    cau_hoi_id: {
        type: Schema.Types.ObjectId,
        refPath: 'loai'
    },
    loai: {
        type: String,
        enum: ['TracNghiem', 'TuLuan']
    },
}, {timestamps: true});
module.exports = mongoose.model('CauHoi', CauHoiSchema, 'cau_hoi');