// ==========================
// CAESAR CIPHER
// ==========================
function encryptCaesar() {
  let text = document.getElementById("caesarText").value;
  let shift = parseInt(document.getElementById("caesarShift").value);
  document.getElementById("caesarResult").innerText =
    caesar(text, shift);
}

function decryptCaesar() {
  let text = document.getElementById("caesarText").value;
  let shift = parseInt(document.getElementById("caesarShift").value);
  document.getElementById("caesarResult").innerText =
    caesar(text, -shift);
}

function caesar(text, shift) {
  shift = shift % 26;
  let result = "";

  for (let char of text.toUpperCase()) {
    if (char >= 'A' && char <= 'Z') {
      let code = char.charCodeAt(0) - 65;
      let newCode = (code + shift + 26) % 26;
      result += String.fromCharCode(newCode + 65);
    } else {
      result += char;
    }
  }
  return result;
}

// ==========================
// VIGENERE CIPHER
// ==========================
function encryptVigenere() {
  let text = document.getElementById("vigenereText").value;
  let key = document.getElementById("vigenereKey").value;
  document.getElementById("vigenereResult").innerText =
    vigenere(text, key, true);
}

function decryptVigenere() {
  let text = document.getElementById("vigenereText").value;
  let key = document.getElementById("vigenereKey").value;
  document.getElementById("vigenereResult").innerText =
    vigenere(text, key, false);
}

function vigenere(text, key, encrypt) {
  let result = "";
  key = key.toUpperCase().replace(/[^A-Z]/g, "");
  let keyIndex = 0;

  for (let char of text.toUpperCase()) {
    if (char >= 'A' && char <= 'Z') {
      let textCode = char.charCodeAt(0) - 65;
      let keyCode = key.charCodeAt(keyIndex % key.length) - 65;

      let newCode;
      if (encrypt) {
        newCode = (textCode + keyCode) % 26;
      } else {
        newCode = (textCode - keyCode + 26) % 26;
      }

      result += String.fromCharCode(newCode + 65);
      keyIndex++;
    } else {
      result += char;
    }
  }
  return result;
}
