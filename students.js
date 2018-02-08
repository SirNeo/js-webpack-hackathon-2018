import {getAvg, getTotalScore} from "./averageService";

$('body').css('background-color', 'lightSkyBlue');

const scores = [90, 75, 60, 99, 94, 10];

const averageScore = getAvg(scores);

const totalScore = getTotalScore(scores);

const messageToDisplayAvg = `Average score ${averageScore}`;
const messageToDisplayTotal = `Total score ${totalScore}`;

document.write(messageToDisplayAvg);
document.write(messageToDisplayTotal);