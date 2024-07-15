function countCharacters(str) {
    let charCount = {};

    for (let char of str) {
  charCount[char] = (charCount[char] || 0) + 1;
    }
return charCount;
}
let result = countCharacters("hello");
console.log(result);