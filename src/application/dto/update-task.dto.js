/**
 * Update Activity DTO (Data Transfer Object)
 */

module.exports = (data) => {
  const updateData = {};

  if (data.title !== undefined) {
    if (!data.title.trim()) {
      throw new Error('اسم النشاط لا يمكن أن يكون فارغاً');
    }
    updateData.title = data.title.trim();
  }

  if (data.description !== undefined) {
    updateData.description = data.description.trim();
  }

  if (data.completed !== undefined) {
    if (typeof data.completed !== 'boolean') {
      throw new Error('حالة الإكمال يجب أن تكون صحيحة أو خاطئة');
    }
    updateData.completed = data.completed;
  }

  if (data.seats !== undefined) {
    updateData.seats = Number(data.seats) || 0;
  }

  if (data.registeredStudents !== undefined) {
    if (!Array.isArray(data.registeredStudents)) {
      throw new Error('قائمة الطلاب المسجلين يجب أن تكون مصفوفة');
    }
    updateData.registeredStudents = data.registeredStudents;
  }

  if (data.ownerClub !== undefined) {
    updateData.ownerClub = data.ownerClub;
  }

  return updateData;
};
