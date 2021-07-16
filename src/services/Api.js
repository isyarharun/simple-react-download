import randomstring from "randomstring";

export default {
  getInput() {
    let alphaNumerics = randomstring.generate({
      charset: "alphanumeric",
    });
    let alphabetics = randomstring.generate({
      charset: "alphabetic",
    });
    let integer = randomstring.generate({
      charset: "numeric",
    });
    return `${alphaNumerics},${alphabetics},${integer}`;
  },
  generate_random_data1(size) {
    var chars = "abcdefghijklmnopqrstuvwxyz".split("");
    var len = chars.length;
    var random_data = [];

    while (size--) {
      random_data.push(chars[(Math.random() * len) | 0]);
    }

    return random_data.join("");
  },
};
