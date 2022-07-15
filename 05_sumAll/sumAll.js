const sumAll = function(x, y) {
    if(typeof x === "number"  &&  typeof y ==="number" &&  x >= 0  &&  y >= 0){
        let sum = 0;
        let bigger = x > y ? x: y;
        let smaller = x < y ? x: y;

        for(let i = smaller; i <= bigger; i++){
            sum += i;
        }

        console.log(sum)
        return sum;
       

    }else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
