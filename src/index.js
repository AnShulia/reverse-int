module.exports = function reverse (n) {
    const nRev = n.toString().split("").reverse().join("");
    const nRevP = parseInt(nRev, 10);

    return nRevP;
}
