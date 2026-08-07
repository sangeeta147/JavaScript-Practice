let arr = [1, 2, 3, 4, 5,6,7];

let user = {
    first_name : "Sangeeta",
    last_name : "Kundu",
    age : 25,
    email : "kundugeeta15@gmail.com",
    occupation : "Software Engineer",
    Address : {
        street : "123 Main St",
        city : "New York",
        state : "NY",
        zip : "10001"
    },
    Gender : "Female",
    array : arr,
}

console.log(user);

let usename = "NAME";

let obj1 = {
    [usename] : "Sangeeta",
}

console.log(obj1);

let obj2 = new Object();
obj2.name = "Aditya";
obj2.age = 25;
obj2.gender = "Female";

console.log(obj2);