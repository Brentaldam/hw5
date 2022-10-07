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


let cLastNameResults = [];

for (let i = 0; i < studentList.length; i++) {

    if (studentList[i].firstName[0] === 'C' || studentList[i].firstName[0] === 'c') {

        let newArry = {};

        newArry.firstName = (studentList[i].firstName);

        newArry.lastName = (studentList[i].lastName);

        let minScore = studentList[i].scores[0], maxScore = studentList[i].scores[0]; 
        
        let avgScore = 0;

        let sum = 0;

        for (let j = 0; j < studentList[i].scores.length; j++) {

            let val = studentList[i].scores[j];

            sum += val;

            if (val < minScore)

                minScore = val;

            if (maxScore < val)

                maxScore = val;

        }

        avgScore = sum / studentList[i].scores.length;

        newArry.minScore = (minScore);

        newArry.maxScore = (maxScore);

        newArry.avgScore = (avgScore);

        cLastNameResults.push(newArry);

    }

}

console.log(cLastNameResults);