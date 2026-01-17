const createDTO = require('../../../application/dto/create-activity.dto');
const updateDTO = require('../../../application/dto/update-activity.dto');

/**
 * Activity Controller - التعامل مع طلبات واستجابات HTTP
 */

module.exports = (usecase) => ({
  /**
   * إنشاء نشاط جديد
   * POST /api/tasks
   */
  create: async (req, res) => {
    try {
      const dto = createDTO(req.body);
      const activity = await usecase.createActivity(dto);
      res.status(201).json(activity);
    } catch (error) {
      console.error('Error creating activity:', error.message);
      res.status(400).json({
        error: error.message || 'فشل في إنشاء النشاط'
      });
    }
  },

  /**
   * الحصول على جميع الأنشطة
   * GET /api/tasks
   */
  getAll: async (req, res) => {
    try {
      const activities = await usecase.getActivities();
      res.json(activities);
    } catch (error) {
      console.error('Error fetching activities:', error.message);
      res.status(500).json({
        error: 'فشل في جلب الأنشطة'
      });
    }
  },

  /**
   * البحث عن الأنشطة
   * GET /api/tasks/search?title=keyword
   */
  search: async (req, res) => {
    try {
      const activities = await usecase.searchActivities(req.query.title || '');
      res.json(activities);
    } catch (error) {
      console.error('Error searching activities:', error.message);
      res.status(500).json({
        error: 'فشل في البحث عن الأنشطة'
      });
    }
  },

  /**
   * تحديث نشاط موجود
   * PUT /api/tasks/:id
   */
  update: async (req, res) => {
    try {
      const dto = updateDTO(req.body);
      const activity = await usecase.updateActivity(req.params.id, dto);

      if (!activity) {
        return res.status(404).json({
          error: 'النشاط غير موجود'
        });
      }

      res.json(activity);
    } catch (error) {
      console.error('Error updating activity:', error.message);
      res.status(400).json({
        error: error.message || 'فشل في تحديث النشاط'
      });
    }
  },

  /**
   * حذف نشاط
   * DELETE /api/tasks/:id
   */
  delete: async (req, res) => {
    try {
      const activity = await usecase.deleteActivity(req.params.id);

      if (!activity) {
        return res.status(404).json({
          error: 'النشاط غير موجود'
        });
      }

      res.status(204).send();
    } catch (error) {
      console.error('Error deleting activity:', error.message);
      res.status(500).json({
        error: 'فشل في حذف النشاط'
      });
    }
  }
});
