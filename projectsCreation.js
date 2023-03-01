function projectsCreation (input){
let firstName = input [0];
let projectNumber = Number(input[1]);
let hours = projectNumber * 3;
console.log(`The architect ${firstName} will need ${hours} hours to complete ${projectNumber} project/s.`)
}
projectsCreation(["Sanya", "9"]);