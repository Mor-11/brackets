module.exports = function check(str, bracketsConfig) {
  let newStr = str; // капируем строку 
  let string = bracketsConfig.map((item) => item.join("")); // в массиве делаем из массива строки 
  for (let i = 0; i < str.length; i++) { 
    for (let i = 0; i < string.length; i++) {
      newStr = newStr.replace(string[i], ""); // удаляем скобки парные 
    }
  }
  if (newStr === "") return true; 
  else return false;
}
