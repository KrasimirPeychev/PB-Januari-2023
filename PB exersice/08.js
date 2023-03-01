function fishTank(input){   
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    let v = lenght * width * height;
    let tank = v / 1000;
    let percentOfTank = percent * 0.01;
    let result = tank - (tank * percentOfTank);
    console.log(result);
}

fishTank(["105 ", "77 ", "89 ", "18.5 "])