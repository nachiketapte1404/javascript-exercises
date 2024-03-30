const findTheOldest = function(people) {
    return people.reduce((oldestPerson, person) => {
        const age1 = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : Infinity;
        const age2 = oldestPerson.yearOfDeath ? oldestPerson.yearOfDeath - oldestPerson.yearOfBirth : Infinity;
        return age1 > age2 ? person : oldestPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
