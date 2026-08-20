function a() {
    b()
    console.log("Hii from function a.");
}

function b() {
    c()
    console.log("Hii from function b");
}

function c() {
    console.log("Hii from function c");
}

a();
