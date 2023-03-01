function andProcessors(input) {

    let procesorsCount = Number(input[0]);
    let employeesCount = Number(input[1]);
    let workingDays = Number(input[2]);
    
    let workTime = employeesCount * workingDays * 8;
    let procesors = Math.floor(workTime / 3);
    
    

    if (procesors >= procesorsCount) {
        let profit = (procesors - procesorsCount) * 110.10;
        console.log(`Profit: -> ${profit.toFixed(2)} BGN`);
        
    } else {
        let losses = (procesorsCount - procesors) * 110.10;
        console.log(`Losses: -> ${losses.toFixed(2)} BGN`);
    }

}

andProcessors([500, 8, 20]);



