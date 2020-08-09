const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SinhVienSchema = new Schema({
    ma_sv: {
        required: true,
        unique: true,
        type: String
    },
    ho: {
        required: true,
        type: String
    },
    ten: {
        required: true,
        type: String
    },
    sdt: {
        type: Number,
    },
    gioi_tinh: {
        type: Boolean,
        default: true,
    },
    email: {
        required: true,
        unique: true,
        type: String
    },
    anh_dai_dien: {
        type: String,
        default: 'default.jpg'
    },
    ngay_sinh: {
        required: true,
        type: Date,
    },
    mat_khau: {
        required: true,
        type: String
    },
    ds_lop_hoc: [{
        type: Schema.Types.ObjectId,
        ref: 'LopHoc',
    }],
    nguoi_tao_id: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'NguoiDung'
    },
}, {timestamps: true});
module.exports = mongoose.model('SinhVien', SinhVienSchema, 'sinh_vien');