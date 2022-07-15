const findTheOldest = function(arr) {
    //Given an array of objects representing people with a birth and death year, return the oldest person.
    let oldest;
    const currentDate = (new Date()).getFullYear();

    
    arr.map(el => {       
        let age = (el.yearOfDeath || currentDate ) - el.yearOfBirth;
        if(!oldest || age > ( (oldest.yearOfDeath || currentDate) - oldest.yearOfBirth)){
            oldest = el;
        }
    })

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
