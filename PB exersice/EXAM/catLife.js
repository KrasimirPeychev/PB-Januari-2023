function catLife(input) {

    let catBreed = input[0];
    let catGender = input[1];
    let catYears = 0;

    switch (catBreed) {
        case "British Shorthair":
            if(catGender === "m") {
                catYears = 13;
            } else if(catGender === "f") {
                catYears = 14;
            }
            break;
            case "Siamese":
                if(catGender === "m") {
                    catYears = 15;
                } else if(catGender === "f") {
                    catYears = 16;
                }
                break;
                case "Persian":
                    if(catGender ==="m") {
                        catYears = 14;
                    } else if(catGender === "f") {
                        catYears = 15;
                    }
                    break;
                    case "Ragdoll":
                        if(catGender === "m") {
                            catYears = 16;
                        } else if(catGender === "f") {
                            catYears = 17;
                        }
                        break;
                        case "American Shorthair":
                            if(catGender === "m") {
                                catYears = 12;                
                            } else if(catGender === "f") {
                                catYears = 13;
                            }
                            break;
                            case "Siberian":
                                if(catGender === "m") {
                                    catYears = 11;                                
                                } else if(catGender === "f") {
                                    catYears = 12;
                                }
                                break;                                                                            
  
    
        default:console.log(`${catBreed} is invalid cat!`)
            break;
    }
let catMonths = (catYears * 12) / 6;

console.log(`${catMonths} cat months`);
}

catLife(["Siamese", "f"])