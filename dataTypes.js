var lName = "Luke Byrne";
console.log(lName);
var x;
x = ["Luke", 0851416687, "Galway"];
console.log(x);
var numberLine;
(function (numberLine) {
    numberLine[numberLine["one"] = 0] = "one";
    numberLine[numberLine["two"] = 1] = "two";
    numberLine[numberLine["three"] = 2] = "three";
})(numberLine || (numberLine = {}));
var numLine = numberLine[2];
console.log(numLine);
