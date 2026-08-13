//used to search for an element that meets a specified condition
//returns only first matching element

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

let first_failed_student = students.find((elem)=>{
    if (elem.marks<33){
        return true;
    }
    else{
        return false;
    }
});

console.log(first_failed_student.first_name);