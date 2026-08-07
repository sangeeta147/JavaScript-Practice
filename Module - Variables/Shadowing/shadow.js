var a = 10;

{
    var a = 20; /*this will override the value of a*/
    console.log(a); /*will log 20*/
}
console.log(a); /*will log 10*/