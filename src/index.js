module.exports = function toReadable (number) {
    var a = [
        ["zero", "one", "two", "three", "four", "five", "six",
            "seven", "eight", "nine", "ten", "eleven",
            "twelve", "thirteen", "fourteen", "fifteen",
            "sixteen", "seventeen", "eighteen", "nineteen"],
    
        [,,"twenty", "thirty", "forty", "fifty", "sixty",
            "seventy", "eighty", "ninety"]
    ];
    number = parseInt(number, 10);
    if (number < 20) {
        return a[0][number];
    }
    if (number < 100) {
        return (a[1][parseInt(number / 10)] + ' ' + ((number % 10 === 0) ? '' : toReadable(number % 10))).trim();
    }
    return (a[0][parseInt(number / 100)] + ' hundred' + ' ' + ((number % 100 === 0) ? '' : toReadable(('' + number).substr(1)))).trim();
}
