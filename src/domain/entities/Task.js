class Activity {
  constructor({ id, title, description, completed, seats, ownerClub, registeredStudents, createdAt }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed || false;
    this.seats = seats || 0;
    this.ownerClub = ownerClub || '';
    this.registeredStudents = registeredStudents || [];
    this.createdAt = createdAt || new Date();
  }
}

module.exports = Activity;

