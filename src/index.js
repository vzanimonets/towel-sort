// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == undefined || matrix.length == 0) return [];
    return matrix
        .map((value, index) => {
            if ((index + 1) % 2 == 0) value.reverse();
            return value;
        })
        .flat();
};
