/**
 * Activity Use Case - طبقة منطق العمل
 */

module.exports = (repository) => ({
  // إنشاء نشاط جديد
  createActivity: (dto) => repository.create(dto),

  // الحصول على جميع الأنشطة
  getActivities: () => repository.findAll(),

  // الحصول على نشاط واحد بواسطة معرفه
  getActivityById: (id) => repository.findById(id),

  // البحث عن الأنشطة بواسطة العنوان
  searchActivities: (title) => repository.findByTitle(title),

  // تحديث نشاط موجود
  updateActivity: (id, dto) => repository.update(id, dto),

  // حذف نشاط
  deleteActivity: (id) => repository.delete(id)
});
