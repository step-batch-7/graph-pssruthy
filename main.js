const fs = require('fs');
const { bfs } = require('./src/graph');

const main = function () {
  const pairs = JSON.parse(fs.readFileSync('./data/pairs.json', 'utf-8'));
  console.log(bfs(pairs, 'bb', 'jj'));
  console.log(bfs(pairs, 'jj', 'aa'));
};

main();
