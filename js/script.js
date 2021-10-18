var tabs = document.querySelector(".tabs");
var instance = M.Tabs.init(tabs, {});
function encode(result) {
  const digits = result.split("").map((el) => el * 1);
  result += (digits[0] + digits[2] + digits[3]) % 2;
  result += (digits[0] + digits[1] + digits[3]) % 2;
  result += (digits[1] + digits[2] + digits[3]) % 2;
  document.getElementById("encodedStr").value = result;
  document.getElementById("strToDecode").value = result;
}
function decode(result) {
  const digits = result.split("").map((el) => el * 1);
  if ((digits[4] + digits[0] + digits[2] + digits[3]) % 2 != 0) {
    if ((digits[5] + digits[0] + digits[1] + digits[3]) % 2 != 0) {
      if ((digits[6] + digits[1] + digits[2] + digits[3]) % 2 != 0) {
        digits[3] = (digits[3] + 1) % 2;
        alert(`Mistake found in ${4} digit`);
      } else {
        digits[0] = (digits[0] + 1) % 2;
        alert(`Mistake found in ${1} digit`);
      }
    } else {
      if ((digits[6] + digits[1] + digits[2] + digits[3]) % 2 != 0) {
        digits[2] = (digits[2] + 1) % 2;
        alert(`Mistake found in ${3} digit`);
      } else {
        digits[4] = (digits[4] + 1) % 2;
        alert(`Mistake found in ${5} digit`);
      }
    }
  } else if ((digits[5] + digits[0] + digits[1] + digits[3]) % 2 != 0) {
    if ((digits[6] + digits[1] + digits[2] + digits[3]) % 2 != 0) {
      digits[1] = (digits[1] + 1) % 2;
      alert(`Mistake found in ${2} digit`);
    } else {
      digits[5] = (digits[5] + 1) % 2;
      alert(`Mistake found in ${6} digit`);
    }
  } else if ((digits[6] + digits[1] + digits[2] + digits[3]) % 2 != 0) {
    digits[6] = (digits[6] + 1) % 2;
    alert(`Mistake found in ${7} digit`);
  } else {
    alert(`Mistake not found ;)`);
  }
  result = digits.join("");
  document.getElementById("decodedStr").value = result;
}
