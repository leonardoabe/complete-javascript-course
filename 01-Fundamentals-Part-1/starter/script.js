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

if (markHigherBMI) {
    console.log(`Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})`);
} else {
    console.log(`John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})`);
}