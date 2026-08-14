const amount = 100;
const cardNumber = 3487;
//const otp = (Math.floor(Math.random()*1000000));

//console.log(Math.random()); - gives random no's from 0 to 1(can be used for otp purpose).
//console.log(Math.floor(Math.random()*1000000)); - for 6 digit otp no.


const otp = (    (Math.floor(Math.random()*10)) +
    "" + (Math.floor(Math.random()*10)) +
    (Math.floor(Math.random()*10)) +
    (Math.floor(Math.random()*10)) +
    (Math.floor(Math.random()*10)) +
    (Math.floor(Math.random()*10))
);

let message = `Your OTP for Transaction for ${amount} Rupees with Card Number ending with XX${cardNumber} is ${otp}.`;

console.log(message);