function dArray(rows, cols, or = undefined) {
  //export
  let rArray = [];
  for (let i = 0; i < rows; i++) {
    rArray.push([]);
    for (let j = 0; j < cols; j++) {
      rArray[i][j] = or ? i + "," + j : or;
    }
  }
  return rArray;
}

module.exports = dArray;
