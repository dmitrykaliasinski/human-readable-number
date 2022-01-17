module.exports = function toReadable(number) {
    const one = new Array(
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    );
    const tens = new Array(
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    );
    const hundred = "hundred";
    let strNum = number.toString();
    let output = "";

    if (number < 20) {
        output = one[number];
        return output;
    }
    if (strNum.length === 2) {
        output = tens[parseInt(strNum.charAt(0))];
        output = output + " " + one[parseInt(strNum.charAt(1))];
        return output;
    }
    if (strNum.length === 3 && strNum.slice(1) >= 10 && strNum.slice(1) < 20) {
        output = one[parseInt(strNum.charAt(0))] + " " + "hundred";
        output = output + " " + one[parseInt(strNum.slice(1))];
        return output;
    } else {
        output = one[parseInt(strNum.charAt(0))] + " " + "hundred";
        output = output + " " + tens[parseInt(strNum.charAt(1))];
        output = output + " " + one[parseInt(strNum.charAt(2))];
        return output;
    }
    return output;
};
