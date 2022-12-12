  class student {
    constructor(studentID, studentName){
        this.id = studentID;
        this.Name = studentName;
        this.University = "Green University Of Bangladesh"
    }
  }


  const student1 = new student (202002056, "Subrata Basak");
  const student2 = new student (202002070, "SK Mehedi Hasan");
  const student3 = new student (202002085, " Nurul Islam");

  console.log (student1, student2, student3);