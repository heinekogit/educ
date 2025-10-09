
function getAverage(points: number[]): number {
    if (points.length === 0) {
        return 0;
    }

    const sum = points.reduce((acc, n) => acc + n, 0);
    const avg = sum / points.length;
    return avg;
}


























