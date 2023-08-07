function printDigits(number) {
  const digits = number.toString().split('.').join('').split('');
  let divider = 10 ** (digits.length - 1);

  const output = [];
  for (let i = 0; i < digits.length; i++) {
    const digit = parseInt(digits[i]);
    output.push(digit * divider);
    divider = Math.floor(divider / 10);
  }

  return output;
}

function generateOutput() {
  const inputAngka = document.getElementById("inputAngka").value;
  const angka = parseFloat(inputAngka.replace(/,/g, ''));

  if (!isNaN(angka)) {
    const outputAngka = printDigits(angka);
    const outputDiv = document.getElementById("output");

    outputDiv.innerHTML = ""; // Bersihkan output sebelum menambahkan data baru

    outputAngka.forEach((value) => {
      const divElement = document.createElement("div");
      divElement.textContent = value.toLocaleString(); // Format angka dengan koma sebagai pemisah ribuan
      outputDiv.appendChild(divElement);
    });
  } else {
    alert("Masukkan angka");
  }
}
