/**
 * Create Activity DTO (Data Transfer Object)
 */

module.exports = (data) => {
  // التحقق: التأكد من وجود العنوان وأنه ليس فارغاً
  if (!data.title || !data.title.trim()) {
    throw new Error('اسم النشاط مطلوب ولا يمكن أن يكون فارغاً');
  }
  const title = data.title.trim();

  // التحقق من محتوى ضار (مثال بسيط)
  const forbiddenPatterns = [';', '--', 'DROP TABLE', 'SELECT *', '1=1'];
  const hasInappropriate = forbiddenPatterns.some(pattern =>
    title.toUpperCase().includes(pattern)
  );

  if (hasInappropriate) {
    throw new Error('تم اكتشاف رموز غير صالحة');
  }

  // إرجاع بيانات منظمة ومحققة
  return {
    title: data.title.trim(),
    description: data.description ? data.description.trim() : '',
    completed: data.completed === true ? true : false
  };
};
// // Validation: Min Length (3)
// if (title.length < 3) {
//   throw new Error('Title must be at least 3 characters long');
// }

// // Validation: Max Length (100)
// if (title.length > 100) {
//   throw new Error('Title cannot exceed 100 characters');
// }



