import * as averageService from "./averageService";

const scores = [90, 75, 60, 99, 94, 10];
const averageScore = averageService.getAvg(scores);
const totalScore = averageService.getTotalScore(scores);

const messageToDisplayAvg = `Average score ${averageScore}`;
const messageToDisplayTotal = `Total score ${totalScore}`;

document.write(messageToDisplayAvg);
document.write(messageToDisplayTotal);