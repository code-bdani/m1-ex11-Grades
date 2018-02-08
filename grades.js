const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60];
// You'll need to change this line of code
const grades = {a:0, b:0, c:0, d:0, f:0};

for (let i = 0; i < scores.length; i++) {
  switch (true) {
    case (scores[i] >= 91 && scores[i] <= 100):
      grades.a += 1;
      console.log("Letter Grade of A", scores[i]);
      break;

    case (scores[i] >= 81 && scores[i] < 91):
      grades.b += 1;
      console.log("Letter Grade of B", scores[i]);
      break;

    case (scores[i] >= 71 && scores[i] < 81):
      grades.c += 1;
      console.log("Letter Grade of C", scores[i]);
      break;

    case (scores[i] >= 61 && scores[i] < 71):
      grades.d += 1;
      console.log("Letter Grade of D", scores[i]);
      break;

    case (scores[i] < 61):
      grades.f += 1;
      console.log("Letter Grade of F", scores[i]);
      break;
  
    default:
      console.log("ERROR!");
      break;
  }
    /*
      If the score is greater than 90, increment grades.A by 1.

      You can use a series of `if/then` blocks, but you could
      also achieve this with a switch statement.
    */
}

console.log("grades", grades);

var lowAndHigh = scores.sort(function(a, b){return a - b});
console.log("Lowest Score", lowAndHigh[0]);
console.log("Highest Score", lowAndHigh[lowAndHigh.length - 1]);

var currentGradeCount = 0;
var mostFrequent = [];

for (var x in grades) {
  if (grades[x] > currentGradeCount) {
    mostFrequent = [x];
    currentGradeCount = grades[x];
  } else if (grades[x] === currentGradeCount) {
    mostFrequent.push(x);
  }

  if (grades[x] < newGradeCount) {
    var leastFrequent = [x];
    var newGradeCount = grades[x];
  } else if (grades === newGradeCount) {
    leastFrequent.push(x);
  }
}

console.log("currentGradeCount", currentGradeCount);
console.log("most frequent", mostFrequent);
console.log("least frequent", leastFrequent);