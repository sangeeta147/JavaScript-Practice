// filter() is used to create a new array containing
// elements that meet a specified condition.

let students = [
    {
        first_name: "Sangeeta",
        marks: 98,
    },
    {
        first_name: "Aditya",
        marks: 50,
    },
    {
        first_name: "Harsh",
        marks: 27,
    },
    {
        first_name: "Swati",
        marks: 67,
    },
    {
        first_name: "Jassi",
        marks: 15,
    },
];

// List of students who failed

let failing_student = students.filter((elem, ind) => {
    if (elem.marks < 33) {
        return true;
    } else {
        return false;
    }
});

for (let i=0;i<failing_student.length;i++){
    console.log(failing_student[i].first_name);        //Just names
}

//console.log(failing_student);     [Marks + Names]