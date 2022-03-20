const students = [
    {
      name: "Anna",
      sex: "f",
      grades: [4.5, 3.5, 4]
    },
    {
      name: "Dennis",
      sex: "m",
      country: "Germany",
      grades: [5, 1.5, 4]
    },
    {
      name: "Martha",
      sex: "f",
      grades: [5, 4, 2.5, 3]
    },
    {
      name: "Brock",
      sex: "m",
      grades: [4, 3, 2]
    }
];
  
  // Compute female student results in a procedural style

// const femaleStudentsResults = [];
//   for (const student of students) {
//     if (student.sex === "f") {
//       let gradesSum = 0;
//       for (const grade of student.grades) {
//         gradesSum += grade;
//       }
//       const averageGrade = gradesSum / student.grades.length;
//       femaleStudentsResults.push({
//         name: student.name,
//         avgGrade: averageGrade
//     });
//   }
// }

  // Compute female student results in a functional style
  // return an array of objects where each object 

  const females = students.filter(student=> student.sex == "f");
  const average = grades => grades.reduce((acc, value)=>acc+value, 0)/grades.length; 
  const femaleStudentsResults  = females.map(student=>{
    return {
      name: student.name, 
      avgGrade: average(student.grades)
    }
  });
  
  console.log(femaleStudentsResults);