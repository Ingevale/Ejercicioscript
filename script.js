function findLargestNumber() {
  let numbers = [];
  let input = prompt("Ingresa un número(stop para salir):");

  while (input !== "stop") {
    numbers.push(parseInt(input));
    input = prompt("Ingresa un número (Escribe 'stop' para finalizar):");
  }

  const largestNumber = Math.max(...numbers);
  document.getElementById("largestNumberResult").innerText = `El número más grande es: ${largestNumber}`;
}

function checkPalindrome() {
  let word = prompt("Ingresa una palabra o frase:");

  let reversedWord = "";
  let i = word.length - 1;

  while (i >= 0) {
    reversedWord += word[i];
    i--;
  }

  if (word.toLowerCase() === reversedWord.toLowerCase()) {
    document.getElementById("palindromeResult").innerText = "Es un palíndromo";
  } else {
    document.getElementById("palindromeResult").innerText = "No es un palíndromo";
  }
}

function calculateSumOfDigits() {
  let number = prompt("Ingresa un número:");

  let sum = 0;
  let i = 0;

  while (i < number.length) {
    sum += parseInt(number[i]);
    i++;
  }

  document.getElementById("sumResult").innerText = `La suma de los dígitos es: ${sum}`;
}

function generateRandomNumber() {
  let min = parseInt(prompt("Ingresa el valor mínimo del rango:"));
  let max = parseInt(prompt("Ingresa el valor máximo del rango:"));

  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  document.getElementById("randomNumberResult").innerText = `El número aleatorio es: ${randomNumber}`;
}

function generateFibonacciSequence() {
  let number = parseInt(prompt("Ingresa un número:"));

  let sequence = [0, 1];
  let i = 1;

  while (sequence[i] < number) {
    let nextNumber = sequence[i] + sequence[i - 1];
    sequence.push(nextNumber);
    i++;
  }

  document.getElementById("fibonacciSequenceResult").innerText = `Secuencia de Fibonacci: ${sequence.join(", ")}`;
}