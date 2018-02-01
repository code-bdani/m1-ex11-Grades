const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {} // You'll need to change this line of code

for (let i = 0; i < scores.length; i++) {
    switch (true) {
        case scores[i] >= 91 && scores[i] <= 100:
            
            break;
    
        default:
            console.log("ERROR!");
    }
}

var lowHigh = scores.sort(function(a,b){return a - b});

console.log("lowest", lowHigh[0]);
console.log("highest", [lowHigh.length - 1]);

var currentGradeCount = 0;
var mostFrequent;
for (var x in grades) {
    if (grades[x] > currentGradeCount) {
        mostFrequent = [x];
        currentGradeCount = grades[x];
    } else if (grades[x] === currentGradeCount) {
        mostFrequent.push(x);
    }
}
console.log("most frequent", mostFrequent);
console.log(lowHigh);
console.log(grades);