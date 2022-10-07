const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];


let updated = [];


for (let i = 0; i < studentList.length; i++) {

    updated.push(studentList[i].scores);
    let avgScore = 0;

    let sum = 0;

    for (let j = 0; j < studentList[i].scores.length; j++) {

        let val = studentList[i].scores[j];

        sum += val;

    }



    avgScore = sum / studentList[i].scores.length;
    updated[i].push(avgScore);
    for (let j = 0; j < studentList[i].scores.length; j++) {
        studentList[i].scores[j] += 5;
    }

}


studentList.forEach((x, index) => {
    console.log(`Full name (last, first): ${studentList[index].lastName}, ${studentList[index].firstName}`);

    console.log(`Updated scores are: ${updated[index]}`);

});