const removeFromArray = function(array,value) {
let indexToRemove=array.indexOf(value);
if(indexToRemove!==-1)
    array.splice(indexToRemove,1);
return array;
};

// Do not edit below this line
module.exports = removeFromArray;
