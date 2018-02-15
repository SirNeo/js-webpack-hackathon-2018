export function getAvg(scores) {
    return getTotalScore(scores) / scores.length;
}

export function getTotalScore(scores) {
    return scores.reduce((score, count) => {
        return score + count;
    });
}

export function getSum(scores) {
    return scores.reduce((score, count) => {
        return score + count;
    });
}