//comparing values to multiple variables

// >85 = Distinction
// >70 = Grade 1
// >60 = Grade 2
// >50 = Grade 3
// >40 = Grade 4
// else fail

const percentage = 27;

/*if(percentage>=85) {
    console.log("Distiction");
}
else if(percentage>70) {
    console.log("Grade 1");
}
else if(percentage>60) {
    console.log("Grade 2");
}
else if(percentage>50) {
    console.log("Grade 3");
}
else if(percentage>40) {
    console.log("Grade 4");
}
else {
    console.log("Fail");
}*/

const grade = 'Grade 4';

switch(grade) {
    case "Distinction":
        console.log("Marks greater than or equal to 85");
        break;
    case "Grade 1":
        console.log("Marks are greater than 70 but less than 85");
        break;
    case "Grade 2":
        console.log("Marks are grater than 60 but less than 70");
        break;
    case "Grade 3":
        console.log("Marks are grater than 50 but less than 60");
        break; 
    case "Grade 4":
        console.log("Marks are grater than 40 but less than 50");
        break;               
    default:
        console.log("You are Failed");    
}