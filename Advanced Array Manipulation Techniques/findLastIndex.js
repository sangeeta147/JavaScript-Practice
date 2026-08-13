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

//Want to find last failing student

let last_failed_student_index = students.findLastIndex((elem)=>{
    if (elem.marks<33){
        return true;
    }
    else{
        return false;
    }
});

console.log(last_failed_student_index);