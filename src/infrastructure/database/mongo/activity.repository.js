/**
 * Activity Repository - Data Access Layer
 */

const ActivityModel = require('./activity.model');

module.exports = {
  // إنشاء نشاط جديد في قاعدة البيانات
  create: (data) => ActivityModel.create(data),

  // البحث عن جميع الأنشطة
  findAll: () => ActivityModel.find(),

  // البحث عن نشاط واحد بواسطة معرفه
  findById: (id) => ActivityModel.findById(id),

  // البحث عن الأنشطة بواسطة العنوان
  findByTitle: (title) =>
    ActivityModel.find({
      title: { $regex: title, $options: 'i' }
    }),

  // تحديث نشاط وإرجاع النسخة المحدثة
  update: (id, data) =>
    ActivityModel.findByIdAndUpdate(id, data, { new: true }),

  // حذف نشاط بواسطة معرفه
  delete: (id) => ActivityModel.findByIdAndDelete(id)
};
