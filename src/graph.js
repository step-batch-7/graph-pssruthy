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

const bfs = function (pairs, source, target) {};

module.exports = { bfs };
