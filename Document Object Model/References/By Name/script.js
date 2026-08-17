alert("Hey!");

//Name

let introduction = document.getElementsByName("intro");

introduction.forEach((element) => {
    console.log(element.value);
});

console.log(introduction[0].value);