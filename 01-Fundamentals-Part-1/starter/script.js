//Challenge #1 
/* const marksWeight = 78;
const marksHeight = 1.69; */
const marksWeight = 95;
const marksHeight = 1.88;

/* const johnsWeight = 92;
const johnsHeight = 1.95; */
const johnsWeight = 85;
const johnsHeight = 1.76;

const marksBMI = calculateBMI(marksWeight, marksHeight);
const johnsBMI = calculateBMI(johnsWeight, johnsHeight);

function calculateBMI(mass, height) {
    return mass / height ** 2;
}

const markHigherBMI = marksBMI > johnsBMI;

console.log(`Mark's BMI: ${marksBMI}`);
console.log(`John's BMI: ${johnsBMI}`);
console.log("Is Mark's BMI higher than John?", markHigherBMI);

/*--------------------------------------------------------------------------------------------------------*/
//Challenge #2
if (markHigherBMI) {
    console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})`);
} else {
    console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})`);
}

/*--------------------------------------------------------------------------------------------------------*/
//Challenge #3
//Data 1 
/* const dolphinsScores = [96, 108, 89];
const koalasScores = [88, 91, 110]; */

//Data Bonus 1
/* const dolphinsScores = [97, 112, 101];
const koalasScores = [109, 95, 123]; */

//Data Bonus 2
const dolphinsScores = [97, 112, 101];
const koalasScores = [109, 95, 106];

const sum = (arr) => arr.reduce((total, value) => total + value, 0);

function calculateAverageScore(scores) {
    return sum(scores) / scores.length;
}

const dolphinsAvgScore = calculateAverageScore(dolphinsScores);
const koalasAvgScore = calculateAverageScore(koalasScores);

console.log(`Dolphins score: ${dolphinsAvgScore}
Koalas score: ${koalasAvgScore}`);

if (dolphinsAvgScore < 100 && koalasAvgScore < 100) {
    console.log(`No team won!`);
} else {
    if (dolphinsAvgScore > koalasAvgScore) {
        console.log(`Dolphins win!`);
    } else if (koalasAvgScore > dolphinsAvgScore) {
        console.log(`Koalas win!`);
    } else {
        console.log(`It's a draw!`);
    }
}
