import {getAvg, getTotalScore} from "./averageService";
import * as $ from 'jquery';

$('body').css('background-color', 'white');

const scores: number[] = [90, 75, 60, 99, 94, 10];
const averageScore: number = getAvg(scores);

const totalScore: number = getTotalScore(scores);

const messageToDisplayAvg: string = `Average score ${averageScore}`;
const messageToDisplayTotal: string = `Total score ${totalScore}`;

document.write(messageToDisplayAvg);
document.write(messageToDisplayTotal);
