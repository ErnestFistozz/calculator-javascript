
const voteDecider = (age) => {
    if (age  < 18){
        return 'under age to vote';
    }
    else if(age === 18 && age <= 20){
        return 'you are eligible to vote for districts';
    }
    else if(age >= 20 && age <= 25){
        return 'you can vote at municipal level';
    }
    else {
        return 'you can vote nationally';
    }
}


module.exports = { voteDecider }