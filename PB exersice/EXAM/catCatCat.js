function catCatCat(foodAmounts){
 
    let smallCats = [];
    let bigCats = [];
    let hugeCats = [];
    let totalGrams = 0;
    let quantity = Number(foodAmounts[0]);
 
    for(let i = 1; i <= quantity; i++){
 
        if(Number(foodAmounts[i]) >= 100 && Number(foodAmounts[i]) < 200){
 
            smallCats.push(Number(foodAmounts[i]));
        }else if(Number(foodAmounts[i]) >= 200 && Number(foodAmounts[i]) < 300){
 
            bigCats.push(Number(foodAmounts[i]));
        }else if(Number(foodAmounts[i]) >= 300 && Number(foodAmounts[i]) < 400){
            
            hugeCats.push(Number(foodAmounts[i]));
        }
 
        totalGrams += Number(foodAmounts[i]);
    }
 
    console.log(`Group 1: ${smallCats.length} cats.`);
    console.log(`Group 2: ${bigCats.length} cats.`);
    console.log(`Group 3: ${hugeCats.length} cats.`);
 
    let pricePerDay = (totalGrams/1000) * 12.45;
 
    console.log(`Price for food per day: ${pricePerDay.toFixed(2)} lv.`);
}

catCatCat([6, 102, 236, 123, 399, 342, 222]);
 