let students = ["shubam", "pratheek", "komal", "darshan" , "vishwanathm", "manavi"];


let houses = [];

for (const stu of students) {
  if ( stu.length < 6) {
    houses.push("griffindor");
  } 
  else if (stu.length < 8){
    houses.push("hufflepuff");
  } 
  else if (stu.length < 12){
    houses.push("ravenclaw");
  }
  else {
    houses.push("slytherin");
  }
  }

  console.log(houses);
