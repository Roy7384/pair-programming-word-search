const transpose = function(matrix) {
  let neo = [];
  if (matrix.length === 0) {
    return [];
  }
  let length = matrix[0].length;
  for (let i = 0; i < length; i++) {
    let row = [];
    for (let j = 0; j < matrix.length; j++) {
      row.push(matrix[j].shift());
    }
    neo.push(row);
  }
  return neo;
};
  
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word))
      return true;
  }
  const vertical = transpose(letters);
  const verticalJoin = vertical.map(vs => vs.join(''));
  for (const v of verticalJoin) {
    if (v.includes(word)) {
      return true;
    }
  }
  return false;
};
  
module.exports = wordSearch;