const leapYears = function(year) {

    //is any number divisible by 4
    if((year % 4) === 0){

        //only centuries divisible by 400 are leap years
        if(year % 100 === 0){
            return (year % 400 === 0)
        }
        
        return true;
    }
    return false;
    

};

// Do not edit below this line
module.exports = leapYears;
