//Example
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to
// Should return true.

const getAdjTable = function (pairs) {
  const adjTable = {};
  pairs.forEach((pair) => {
    if (pair[0] in adjTable) {
      adjTable[pair[0]].push(pair[1]);
    } else {
      adjTable[pair[0]] = [pair[1]];
    }
  });
  return adjTable;
};

const bfs = function (pairs, source, target) {
  const adjTable = getAdjTable(pairs);
  const queue = [source];
  const visited = [];

  while (queue.length !== 0) {
    const from = queue.shift();
    if (adjTable[from].includes(target)) return true;
    adjTable[from].forEach((node) => {
      const isAlreadyInProcess = queue.includes(node) || visited.includes(node);
      if (!isAlreadyInProcess) queue.push(node);
    });
    visited.push(from);
  }
  return false;
};

module.exports = { bfs };
