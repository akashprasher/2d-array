export const dArray = (rows, cols, or = undefined) => {
  let rArray = [];
  for (let i = 0; i < rows; i++) {
    rArray.push([]);
    for (let j = 0; j < cols; j++) {
      rArray[i][j] = or ? i + "," + j : or;
    }
  }
  return rArray;
};
