
const stream = require('fs')
  .readFileSync('./data', 'utf8')
  .trim()
const lines = stream.split('\n')
const [a, b] = lines

console.log(a, b)
