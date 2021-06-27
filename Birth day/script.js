class BirthDay {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.dayKoef = 24 * 60 * 60 * 1000;
  }

  getDaysFromMyBirthday() {
    return this.getAgeInMilliseconds() / this.dayKoef;
  }

  getAgeInMilliseconds() {
    const d = new Date(Date.now());
    const yearInM = d.getFullYear() * 365 * this.dayKoef;
    const monthInM = d.getMonth() * 30 * this.dayKoef;
    const dateInM = d.getDate() * this.dayKoef;
    const currentDateInMillis = yearInM + monthInM + dateInM;

    const bthYearInM = this.year * 365 * this.dayKoef;
    const bthMonthInM = this.month * 30 * this.dayKoef;
    const bthDateInM = this.day * this.dayKoef;

    const bthInMillis = bthYearInM + bthMonthInM + bthDateInM;
    return currentDateInMillis - bthInMillis;
  }

  moreThan(birthday) {
    return this.getAgeInMilliseconds() > birthday.getAgeInMilliseconds();
  }

  isEqual(birthday) {
    return this.getAgeInMilliseconds() == birthday.getAgeInMilliseconds();
  }

  toString() {
    return `${this.day}-${this.month}-${this.year}`;
  }
}
