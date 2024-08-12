function findSummation(N = 1) {
  if (typeof N !== 'number' || N <= 0 || !Number.isInteger(N)) {
      return false;
  }
  let sum = 0;
  for (let i = 1; i <= N; i++) {
      sum += i;
  }
  return sum;
}

function uppercaseFirstandLast(str) {
  if (typeof str !== 'string' || str.trim().length === 0) {
      return '';
  }
  return str.split(' ').map(word => {
      if (word.length === 1) {
          return word.toUpperCase();
      }
      return word[0].toUpperCase() + word.slice(1, -1) + word[word.length - 1].toUpperCase();
  }).join(' ');
}

function findAverageAndMedian(arr) {
  if (!Array.isArray(arr) || arr.some(isNaN)) {
      return { average: null, median: null };
  }

  const average = arr.reduce((a, b) => a + b, 0) / arr.length;
  
  arr.sort((a, b) => a - b);
  const mid = Math.floor(arr.length / 2);
  const median = arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;

  return { average, median };
}

function find4Digits(str) {
  if (typeof str !== 'string') {
      return false;
  }
  const fourDigitMatch = str.split(' ').find(num => /^\d{4}$/.test(num));
  return fourDigitMatch || false;
}

const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Node.js Assignment');
});

app.post('/findSummation', (req, res) => {
    const { number } = req.body;
    const result = findSummation(Number(number));
    res.send(`Summation: ${result}`);
});

app.post('/uppercaseFirstandLast', (req, res) => {
    const { text } = req.body;
    const result = uppercaseFirstandLast(text);
    res.send(`Modified String: ${result}`);
});

app.post('/findAverageAndMedian', (req, res) => {
    const { numbers } = req.body;
    const numberArray = numbers.split(',').map(Number);
    const result = findAverageAndMedian(numberArray);
    res.send(`Average: ${result.average}, Median: ${result.median}`);
});

app.post('/find4Digits', (req, res) => {
    const { text } = req.body;
    const result = find4Digits(text);
    res.send(`First Four-Digit Number: ${result}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
