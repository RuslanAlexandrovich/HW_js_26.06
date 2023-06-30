// function count(a) {
//     a=a.replace(/\s/g, "");
//  let i=0;
//  let j=0;
//  let s=0;
//  Array.from(a).forEach(element =>{
//     if(/[a-zA-Z]/.test(element))
//     i++;
//     if(/[0-9]/.test(element))
//     j++;
//     if(/^[^\p{L}\p{N}]+$/u.test(element))
//     s++;
//  })   
//  console.log(`Letters : ${i}  Numbers : ${j}  Symbols : ${s}`);
// }
// count(prompt("Enter text"));





// function twoNumber(a) {
//     let edinicy = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
//     let desyatki = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];

//     var ten = {
//         10: "десять",
//         20: "двадцать",
//         30: "тридцать",
//         40: "сорок",
//         50: "пятьдесят",
//         60: "шестьдесят",
//         70: "семьдесят",
//         80: "восемьдесят",
//         90: "девяносто"
//     };

//     if(a<10 || a>99){
//         return "Нужно ввести двузначное число!"
//     }

//     if(a in ten){
//         return ten[a];
//     }
    
//     let firstNum = Math.floor(a/10);
//     let secondNum = a%10;
//     return desyatki[firstNum]+" "+edinicy[secondNum];
// }
// let answer = twoNumber(+prompt("Enter number (Example: 25)"))
// console.log(answer);
// twoNumber();







// function textGame(a) {
//     let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//     let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//     let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];  
//     let minus = [" "];
//     var newElem =[];
//     Array.from(a).forEach(elem => {
//         if (upper.includes(elem))
//             newElem.push(lower[upper.indexOf(elem)]);
//         else if (lower.includes(elem))
//             newElem.push(upper[lower.indexOf(elem)]);
//         else if (numbers.includes(elem))  
//             newElem.push("_");
//             else if(minus.includes(elem))
//             newElem.push(" ");
//     });
//     console.log(newElem.join(""));
// }

// textGame(prompt("Enter"));







// function camelCase(a) {
//     let minus = "-";
//     let index = a.indexOf(minus);

//     while (index !== -1) {
//         a = a.replace(minus, "");
//         let letter = a[index].toUpperCase();
//         a = a.slice(0, index) + letter + a.slice(index + 1);
//         index = a.indexOf(minus);
//     }

//     return a;
// }
// let answer = camelCase(prompt("Enter style").toLowerCase());
// console.log(answer);





// function shortName(a) {
//     a=a.split(" ");
//     let newRow =[];
//     a.forEach(elem => {
//         newRow.push(elem[0]);
//     });
//     console.log(newRow.join("").toUpperCase());
// }
// shortName(prompt("Enter row"));






// function shortName(a) {
//     a=a.split(" ");
//     let res = Array.from(a).reduce((acc, elem)=>{
//         console.log(a);
//         acc+=elem[0].toUpperCase();
//         return acc;
//     }, "") 
//     console.log(res);
// }
// shortName(prompt("Enter row"));





// function manyRows() {
//     let row = "";
//     let text;
  
//     do {
//       text = prompt("Введите текст");
//       row += text + " ";
//       console.log(row);
//     } while (text !== null);
//     console.log(row);
//   }
//   manyRows();
  




// function calc() {
//     let enter = prompt("Введите выражение");
//     let res = eval(enter);
//     console.log(res);
//   }
//   calc();
  




// function getUrlInfo(inputUrl) {
//   let parsedUrl = new URL(inputUrl);

//   console.log('URL: ' + parsedUrl.href);
//   console.log('Protocol: ' + parsedUrl.protocol);
//   console.log('Hostname: ' + parsedUrl.hostname);
//   console.log('Pathname: ' + parsedUrl.pathname);
// }

// getUrlInfo(prompt('Введите URL:'));





// function rowToRow(a) {
//     let arr = [".", ",", "/"];
//     let numbs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     let newArr =[];
//     Array.from(a).forEach(elem =>{
//         console.log(a);
//         if(numbs.includes(Number(elem))){
//         newArr.push(elem);
//         }
//         else if(arr.includes(elem)){
//             newArr.push(" ");
//         }
//     })
//     console.log(newArr.join(""));
// }
// rowToRow(prompt("Enter"));





// let str = "Today is %1 %2.%3.%4";

// function format() {
//     let str = arguments[0];
//     let reg = /%\d+/g;
//     let arr = str.split(reg);
//     let elems = str.match(reg);
//     indexes = elems.map(val=>val.replace("%", ""));
//     let answer = "";
//     for(let i=0; i<arr.length; i++)
//     answer += arr[i]+(arguments[indexes[i]] !== undefined ? arguments[indexes[i]] : "");
//     return answer;

// }
// let res = format(str, "Monday", 10, 8, 2020);
// console.log(res);