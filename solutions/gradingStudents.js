function gradingStudents(grades) {
    let updatedGrades = [];
    for(let i = 0; i < grades.length; i++){
        if(grades[i] >= 38 && ((5 - (grades[i] % 5)) < 3)){
            updatedGrades.push(grades[i] + (5 - (grades[i] % 5)))
        }else{
           updatedGrades.push(grades[i]);
        }
    }
    return updatedGrades;
}