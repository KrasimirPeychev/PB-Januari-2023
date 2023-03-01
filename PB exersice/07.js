function basketballEquipment(input){
    let taxPerYear = Number(input[0]);
    let sneakers = taxPerYear - (taxPerYear * 0.40);
    let outfit = sneakers - (sneakers * 0.20);
    let basketBall = outfit / 4;
    let accessories = basketBall / 5;
    let result = taxPerYear + sneakers + outfit + basketBall + accessories;
    console.log(result);

}

basketballEquipment(["550 "])