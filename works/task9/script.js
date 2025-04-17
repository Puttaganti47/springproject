function calculateGrade() {
    let score = parseFloat(document.getElementById('score').value);
     // Ensure it fetches the value of the input
    let grade = "";
    if (score > 80) {
    grade = "A";
    } else if (score > 60 && score <= 80) {
    grade = "B";
    } else if (score > 40 && score <= 60) {
    grade = "C";
    } else if (score >= 0 && score <= 40) {
    grade = "F";
    } else {
    grade = "Invalid score";
    }
    document.getElementById('result').textContent = "Your grade is: " + grade;
    console.log(grade); // For debugging purposes in the console
    }
    