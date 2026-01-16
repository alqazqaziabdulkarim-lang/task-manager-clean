const mongoose = require('mongoose');

/**
 * Activity Schema - تعريف هيكل النشاط في موندو دي بي
 */
const ActivitySchema = new mongoose.Schema({
  // عنوان النشاط - حقل مطلوب
  title: {
    type: String,
    required: [true, 'اسم النشاط مطلوب'],
    trim: true,
    minlength: [1, 'لا يمكن أن يكون العنوان فارغاً']
  },

  // وصف النشاط - حقل اختياري
  description: {
    type: String,
    default: '',
    trim: true
  },

  // حالة الإكمال - بولين
  completed: {
    type: Boolean,
    default: false
  },

  // عدد المقاعد الكلي
  seats: {
    type: Number,
    default: 0
  },

  // النادي المالك للنشاط
  ownerClub: {
    type: String,
    required: false // Temporary for migration
  },

  // الطلاب المسجلين في النشاط
  registeredStudents: {
    type: [String],
    default: []
  },

  // طابع زمني وقت إنشاء النشاط
  createdAt: {
    type: Date,
    default: Date.now
  }

}, {
  // خيارات المخطط
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

/**
 * Virtual Field: 'id'
 */
ActivitySchema.virtual('id').get(function () {
  return this._id.toString();
});

module.exports = mongoose.model('Activity', ActivitySchema);
