function weekendOrWorkingDay(input) {
    let day = input[0];

    switch(day) {
        case "Monday" :
        case "Tuesday" : 
        case "Wednesday" : 
        case "Thursday" : 
        case "Friday" : console.log("Working day"); break;
        case "Saturday" : 
        case "Sunday" : console.log("Weekend"); break;
        default: console.log("Error"); break;
    }
}

weekendOrWorkingDay(["Wednesday"]);

        // case "Monday" : console.log("Working Day"); break;
        // case "Tuesday" : console.log("Working Day"); break;
        // case "Wednesday" : console.log("Working Day"); break;
        // case "Thursday" : console.log("Working Day"); break;
        // case "Friday" : console.log("Working Day"); break;
        // case "Saturday" : console.log("Weekend"); break;
        // case "Sunday" : console.log("Weekend"); break;
        // default: console.log("Error"); break;