function suppliesForSchool(input){
    let penPackages = Number(input[0]);
    let markerPackages = Number(input[1]);
    let litersOfDetergent = Number(input[2]);
    let discount = Number(input[3]);
    let priceOfAll = (penPackages * 5.80) + (markerPackages * 7.20) + (litersOfDetergent * 1.20);
    let priceWithDiscount = priceOfAll * (discount / 100);
    let result = priceOfAll - priceWithDiscount;
    console.log(result);
}

suppliesForSchool(["4 ", "2 ", "5 ", "13 "]);