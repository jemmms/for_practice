//convertion - change the datatype of a value to another.
// it change the datatype incase if the value was wrong to you and clarify.

let age = window.prompt("how old i am?");

age = Number(age);
// age+=1;

if(18<=age){
    document.getElementById("headerText").textContent = `your age ${age} is not stricted.`;
}
else if(18>=age){
    document.getElementById("headerText").textContent = `your age ${age} is restricted.`;
}

document.getElementById("type").textContent = (age, typeof age);




let x = "james";
let y = "james";
let z = "james";

x = String(x);
y = Number(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);



