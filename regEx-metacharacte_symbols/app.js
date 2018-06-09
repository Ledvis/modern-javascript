// * Literal characters
let re = /hello/i;

// * Metacharacter: string must starts with symbol
re = /^h/i; // Must starts with
re = /d$/i; // Must ends with
re = /^hello$/i; // Must starts and ends with
re = /.illo/i; // Must matches any ONE character 
re = /h*llo/i; // Must matches character 0 or more times
re = /gre?a?y\?/i; // Optional character

// * Brackets [] - character sets
re = /gr[ea]y/i;

// * Grouping
re = /^([0-9]x){3}$/;

const str1 = '3x3x3x3x';
const result = re.exec(str1);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT matches ${re.source}`);
  }
}

reTest(re, str1);