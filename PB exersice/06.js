function foodDelivery(input){   
    let chickenMenus = Number(input[0]);
    let fishMenus = Number (input[1]);
    let vegetarianMenus = Number(input[2]);
    let allMenus = (chickenMenus * 10.35) + (fishMenus * 12.40) + (vegetarianMenus * 8.15);
    let desert = allMenus * 0.20;
    let result = (allMenus + desert) + 2.50;
    console.log(result);

}

foodDelivery(["9 ", "2 ", "6 "]);