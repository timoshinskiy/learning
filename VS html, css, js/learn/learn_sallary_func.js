let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (key in salaries) { // check of John/Ann... in salaries
    sum += salaries[key]; // add John/Ann... count to sum
}
alert(sum);