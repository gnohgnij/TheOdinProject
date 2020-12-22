let findTheOldest = function(people) {
    let oldestAge = 0;
    let index = 0;
    let age = 0;
    let currentYear = 2020;
    for(let i=0; i<people.length; i++){
        if(people[i].yearOfDeath == undefined)
            age = currentYear - people[i].yearOfBirth;
        else
            age = people[i].yearOfDeath - people[i].yearOfBirth;
        if(oldestAge < age){
            oldestAge = age;
            index = i;
        }
    }
    return people[index];
}

module.exports = findTheOldest
