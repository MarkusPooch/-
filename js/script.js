const keys = {
    upperCase: "ABCDEFGHKLMNPQRSTUVWXYZ",
    lowerCase: "abcdefghkmnpqrstuvwxyz",
    number: "123456789",
    symbol: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
  }
  const getKey = [
    function upperCase() {
      return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
    },
    function lowerCase() {
      return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
    },
    function number() {
      return keys.number[Math.floor(Math.random() * keys.number.length)];
    },
    function symbol() {
      return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
    }
  ];
  
  function createPassword() {
    const upper = document.getElementById("upperCase").checked;
    const lower = document.getElementById("lowerCase").checked;
    const number = document.getElementById("number").checked;
    const symbol = document.getElementById("symbol").checked;
    if (upper + lower + number + symbol === 0) {
      alert("Bitte wenigstens eine Box auswählen.");
      return;
    }
    const passwordBox = document.getElementById("passwordBox");
    const length = document.getElementById("length");
    if (length.value < 8 ) {
        alert(`Die Laenge von ${length.value} ist zu kurz, bitte mindestens 8 Zeichen auswählen`);
        return;
    }
    if (length.value > 63 ) {
        alert(`Die Laenge von ${length.value} ist zu lang, bitte maximal 63 Zeichen auswählen`);
        return;
    }
    let password = "";
    while (length.value > password.length) {
      let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
      let isChecked = document.getElementById(keyToAdd.name).checked;
      if (isChecked) {
        password += keyToAdd();
      }
    }
    passwordBox.innerHTML = password;
  }
  function copyPassword() {
    const textarea = document.createElement("textarea");
    const password = document.getElementById("passwordBox").innerText;
    if (!password) { return; }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Passwort in die Zwischenablage kopiert");
  }