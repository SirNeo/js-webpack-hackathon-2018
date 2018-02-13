import {getAvg, getTotalScore} from "./averageService";
import banner from './content/banner.jpg';

$('body').css('background-color', 'white');

scores = [90, 75, 60, 99, 94, 10];

const averageScore = getAvg(scores);

const totalScore = getTotalScore(scores);

const messageToDisplayAvg = `Average score ${averageScore}`;
const messageToDisplayTotal = `Total score ${totalScore}`;

document.write(messageToDisplayAvg);
document.write(messageToDisplayTotal);

const img = document.createElement('img');
img.src = banner;

// document.getElementById('imgContainer').appendChild(img);