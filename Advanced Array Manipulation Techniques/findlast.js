//retuns the last matching element
//no match found : undefined

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

let last_failed_student = students.findLast((elem)=>{
    if (elem.marks<33){
        return true;
    }
    else{
        return false;
    }
});

console.log(last_failed_student.first_name);