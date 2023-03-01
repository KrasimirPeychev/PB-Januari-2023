function catFood(input) {
    let catNumber = Number(iput[0]);

    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let totalFood = 0;
    

    for(let i= 1; i <= catNumber; i++){
        let doubleFood = Number(input[i]);
        totalFood += doubleFood;
        if( doubleFood >= 100 && food < 200){
            group1 += 1;
            } else if(doubleFood >= 200 && food <300){
            group2 += 1;
            } else if(doubleFood >= 300 && food < 400){
            group3 +=1;
            }
            totalFood = Math.round(totalFood / 1000 * 12.45);
    }

    console.log(`Group 1: ${catNumber}: ${group1} cats.`)
  
}

catFood([6, 102, 236, 123, 399, 342, 222]);


