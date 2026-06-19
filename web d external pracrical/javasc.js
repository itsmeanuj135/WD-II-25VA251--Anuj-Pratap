function calculateMarks() {

    let n = parseInt(document.getElementById("subjects").value);

    let total = 0;

    // Loop for entering marks
    for (let i = 1; i <= n; i++) {
        let marks = parseFloat(prompt("Enter marks for Subject " + i));

        total += marks;
    }

    let average = total / n;

    let grade;

    if (average >= 90) {
        grade = "A+";
    }
    else if (average >= 80) {
        grade = "A";
    }
    else if (average >= 70) {
        grade = "B";
    }
    else if (average >= 60) {
        grade = "C";
    }
    else if (average >= 40) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    let status;

    if (average >= 40) {
        status = "PASS";
    }
    else {
        status = "FAIL";
    }

    document.getElementById("result").innerHTML =
        "<h3>Total Marks: " + total + "</h3>" +
        "<h3>Average Marks: " + average.toFixed(2) + "</h3>" +
        "<h3>Grade: " + grade + "</h3>" +
        "<h3>Status: " + status + "</h3>";
}