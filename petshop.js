function petshop(input){
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);
    let a = dogFood * 2.5;
    let b = catFood * 4;
    let result = a + b;
    console.log(result + " lv.")
}
petshop(["13", "9"])