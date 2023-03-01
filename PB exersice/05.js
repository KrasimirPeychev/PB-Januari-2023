function repainting(input){    
    let requiredAmountOfNylon = Number(input[0]);
    let requiredAmountOfPaint = Number(input[1]);
    let amountOfThinner = Number(input[2]);
    let hoursForJob = Number(input[3]);
    let nylon = (requiredAmountOfNylon + 2) * 1.50;
    let paint = (requiredAmountOfPaint + (requiredAmountOfPaint * 0.10)) * 14.50;
    let thinner = amountOfThinner * 5;
    let sumOfMaterials = (nylon + paint + thinner) + 0.40;
    let sumForLabor = (sumOfMaterials * 0.30) * hoursForJob;
    let result = sumOfMaterials + sumForLabor;
    console.log(result);
}

repainting(["5 ", "10 ", "10 ", "1 "]);