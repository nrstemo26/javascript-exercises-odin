const removeFromArray = function(arr, ...removedItems ) {
    console.log(removedItems)
    let newArr = arr.filter(el => {
        for(let x of removedItems){
            if(x === el){
                return el !== x;
            }
        }
        return el;
    })
    console.log(newArr)
    return newArr;
};


// Do not edit below this line
module.exports = removeFromArray;
