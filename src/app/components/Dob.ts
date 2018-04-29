export class Dob {
  dob: String;

  constructor(dob: String) {
    this.dob = dob;
  }

  setDate(dob) {
      this.dob = dob;
  }

  getDate() {
    return this.dob;
  }
}
