//Task 1
let student = {
    first_name: "Sangeeta",
    age: 25,
    course: "Full Stack Development",
    marks: 98
};

console.log(student.first_name);
console.log(student.age);
console.log(student.course);
console.log(student.marks);


//Task 2

let name = "   Sangeeta Kundu   ";

console.log(name.trim());

console.log(name.indexOf("Kundu"));

console.log(name.trim().replace("Kundu","Developer"));


//Task 3

let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

console.log(fruits[0]);
console.log(fruits.length);
console.log(fruits.includes("Mango"));

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
};


//Task 4

let marks = 40;

if (marks >= 90) {
    console.log("Excellent");
}
else if (marks >= 70) {
    console.log("Good");
}
else if (marks >= 50) {
    console.log("Average");
}
else {
    console.log("Fail");
};



//Task 5

let student = {
    name: "Sangeeta",
    age: 25,
    marks: 85,
    course: "JavaScript"
};

console.log(student.name);
console.log(student.marks);

if (student.marks >= 50) {
    console.log("Sangeeta has passed");
}
else {
    console.log("Sangeeta has failed");
};



// Task 6

let students = [
    { name: "Sangeeta", marks: 85 },
    { name: "Aditya", marks: 82 },
    { name: "Riya", marks: 91 },
    { name: "Geeta", marks: 75 },
    { name: "Sonty", marks: 92 },
    { name: "Priya", marks: 41 },
    { name: "Sita", marks: 55 },
    { name: "Swati", marks: 32 },
    { name: "Siya", marks: 91 },
    { name: "Rani", marks: 39 },
];

// for all names
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
};


//for marks more than 50
for (let i = 0; i < students.length; i++) {
    if (students[i].marks >= 50) {
        console.log(students[i].name);
    }
};