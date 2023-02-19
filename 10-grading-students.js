//Grading Students

/*
* HackerLand University has the following grading policy:
* -Every student receives a grade in the inclusive range from 0 to 100.
* -Any grade less than 40 is falling grade.
*
* Sam is a professor at the university and likes to round each student's grade according to these rules:
* - if the difference between the grade and the next multiple of 5 is less than 3, round grade up to next
*   multiple of 5.
* - if the value of grade is less than 38, no rounding occurs as the result will still be a falling grade.
*
* Examples:
* grade = 84 round to 85 (85-84 is less than 3)
* grade = 29 do not round (result is less than 40)
* grade = 57 do not round (60-57 is 3 or higher)
*
* Given the initial value of grade for each of sam's n students, write code to automate the rounding process.
*/

function gradingStudents(grades) {
    let multipleToRoundTo = 5;
    let numberToRoundAt = 2;
    for(let i = 0; i < grades.length; i++) {
        if(grades[i] >= 38 && grades[i] % multipleToRoundTo > numberToRoundAt) {
            grades[i] = grades[i] + (multipleToRoundTo - (grades[i] % multipleToRoundTo));
        }
    }
    return grades;
}
