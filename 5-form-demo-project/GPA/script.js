function calculateGPA() {
    // เก็บข้อมูลคะแนนและหน่วยกิต
    const subjects = [
        { id: "CSI101", credits: 3 },
        { id: "CSI102", credits: 3 },
        { id: "CSI203", credits: 3 },
        { id: "CSI204", credits: 3 },
        { id: "CSI305", credits: 3 }
    ];

    let totalCredits = 0;
    let totalGradePoints = 0;

    for (let subject of subjects) {
        let score = parseFloat(document.getElementById(subject.id).value);
        
        // ตรวจสอบว่าป้อนคะแนนครบหรือไม่
        if (isNaN(score) || score < 0 || score > 100) {
            alert("กรุณากรอกคะแนนให้ถูกต้อง (0-100) สำหรับ " + subject.id);
            return;
        }

        let gradePoint = getGradePoint(score);
        totalGradePoints += gradePoint * subject.credits;
        totalCredits += subject.credits;
    }

    let gpa = totalGradePoints / totalCredits;
    document.getElementById("result").innerText = "GPA ของคุณคือ: " + gpa.toFixed(2);
}

// ฟังก์ชันแปลงคะแนนเป็นเกรด
function getGradePoint(score) {
    if (score >= 80) return 4.0;
    if (score >= 75) return 3.5;
    if (score >= 70) return 3.0;
    if (score >= 65) return 2.5;
    if (score >= 60) return 2.0;
    if (score >= 55) return 1.5;
    if (score >= 50) return 1.0;
    return 0.0;
}
