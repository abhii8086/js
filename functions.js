function printName() {
    console.log("abhi");
}

printName();

//  Arrow function
printName = () => {
    console.log("abhijeet");
}

printName();

//function as var
let x = printName = () => {
    console.log("abhijeet");
}

console.log(x());

