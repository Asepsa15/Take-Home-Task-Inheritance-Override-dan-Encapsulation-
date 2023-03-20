class Person {
  constructor(name, NIK, gender) {
    this._name = name;
    this._NIK = NIK;
    this._gender = gender;
  }

  setName(name) {
    this._name = name;
  }

  setNIK(NIK) {
    this._NIK = NIK;
  }

  setGender(gender) {
    this._gender = gender;
  }

  getName() {
    return this._name;
  }

  getNIK() {
    return this._NIK;
  }

  getGender() {
    return this._gender;
  }
}

class Employee extends Person {
  constructor(name, NIK, gender, jobTitle, salary) {
    super(name, NIK, gender);
    this._jobTitle = jobTitle;
    this._salary = salary;
  }

  setJobTitle(jobTitle) {
    this._jobTitle = jobTitle;
  }

  setSalary(salary) {
    this._salary = salary;
  }

  getJobTitle() {
    return this._jobTitle;
  }

  getSalary() {
    return this._salary;
  }
}

class Student extends Person {
  constructor(name, NIK, gender, university, major) {
    super(name, NIK, gender);
    this._university = university;
    this._major = major;
  }

  setUniversity(university) {
    this._university = university;
  }

  setMajor(major) {
    this._major = major;
  }

  getUniversity() {
    return this._university;
  }

  getMajor() {
    return this._major;
  }
}

const Asep = new Employee(
  "Asep saripudin",
  "10520727",
  "Laki-Laki",
  "Manager",
  50000000
);
console.log(Asep.getName());
console.log(Asep.getNIK());
console.log(Asep.getGender());
console.log(Asep.getJobTitle());
Asep.setSalary(60000000);
console.log(Asep.getSalary());


console.log(`------------------------------------`);
const Asepp = new Student(
  "Asep saripudin",
  "15030808",
  "Laki-Laki",
  "Universitas komputer indonesia ",
  "Sistem informasi"
);
console.log(Asepp.getUniversity());
console.log(Asepp.getMajor());
Asepp.setUniversity("Telkom university");
console.log(Asepp.getUniversity());
console.log(Asepp.getMajor());
