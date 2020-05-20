module.exports = function parseStringArray(arrayString) {
    return arrayString.split(',').map(inti => inti.trim());
}