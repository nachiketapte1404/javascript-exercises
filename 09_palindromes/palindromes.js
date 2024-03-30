const palindromes = function (string) {
reverse="";
for(let i=string.length-1;i>=0;i--)
    reverse+=string[i];
if(string===reverse)
    return true;
else
    return false;
};

// Do not edit below this line
module.exports = palindromes;
