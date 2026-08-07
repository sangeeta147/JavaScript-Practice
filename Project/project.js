//Fizz Buzz Problem ( no from 1 to 200 )

// Divisible by 3 - Fizz

// Divisible by 5 - Buzz

// Divisible by 3 & 5 both - Fizz Buzz

for(let i = 1;i<=200;i++) {
    if(i%5===0&&i%3===0) {
        console.log("Fizz Buzz");
    }

    else if(i%3===0){
        console.log("Fizz");
    }

    else if(i%5===0){
        console.log("Buzz");
    }

    else {
        console.log(i);
    }
}