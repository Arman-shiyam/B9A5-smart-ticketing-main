// problem -01
function calculateMoney(ticketSale) {

    if (ticketSale>0){
        const totalEarning = ticketSale*120;
        const totalCost = 500+(8*50);
        const remainingBlance = totalEarning-totalCost;
        return remainingBlance;
    }
    else{
        return ("Invalid Number");
    }   
}

console.log(calculateMoney(-130));

// problem -02

function checkName(name) {
    if(typeof name == "string") {
        const lowerCase = name.toLowerCase()
        const lastLetter = lowerCase.charAt(lowerCase.length-1);
        if(lastLetter == "a" || lastLetter == "y" || lastLetter == "i" || lastLetter == "e" || lastLetter == "o" || lastLetter == "u" || lastLetter == "w"){
            return "Good Name";
        }
        else{
            return "Bad Name";
        }
    }
    else{
        return "invalid";
    }

}

// console.log(checkName(["Rashew"]));

// problem-03

function deleteInvalids(array) {
    if(Array.isArray(array)){
        let newArray = [];
        for(element of array){
            if (typeof element == "number" && !isNaN(element)){
                // console.log(element);
                newArray.push(element);
                
            }
        }
        return newArray; 
    }
    else{
        return Error("Invalid Array");
    }
    
}

// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));

// problem -4

function password(obj) {
    if (obj.name && obj.birthYear && obj.siteName && obj.birthYear.toString().length == 4){
        const webSite = obj.siteName[0].toUpperCase() +obj.siteName.slice(1) 
        const pass = webSite+"#"+obj.name+"@"+obj.birthYear;
        return pass;
    }
    else{
        return "invalid";
    }
}
// console.log(password({name: "arman",siteName:"google",birthYear:2004}));


function monthlySavings(arr , livingCost) {
   if(Array.isArray(arr) && typeof livingCost == "number" ){
    let totalPayment = 0;
    for (payment of arr){
        if(payment <3000){
            totalPayment = totalPayment+payment;
        }
        if (payment>=3000) {
            const taxt = payment-(payment*20/100);
            totalPayment += taxt;
        }
    }
    const totalSavings = totalPayment-livingCost;
    if(totalSavings>=0){
        return totalSavings;
    }
    else{
        return "earn more";
    }
   }
   else{
    return "invalid Input";
   }

}
   
// console.log(monthlySavings([ 900 , 2700 , 3400] , 10000));
