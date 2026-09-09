function find() {
  const K = Number(document.getElementById('kInput').value);
  const numbersText = document.getElementById('numbersInput').value;
  const numbers = numbersText.split(',').map(Number);

  let result = undefined;

  for (let i = 0; i < numbers.length; i++) {
    const x = numbers[i];
    if (x > K) {
      result = x;
      break;
    }
  }

  document.getElementById('resultValue').textContent = result !== undefined ? result : 'Нет чисел больше ' + K;
  document.getElementById('result').className = 'show';
}
