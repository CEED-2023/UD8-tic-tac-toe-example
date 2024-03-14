// Expects an array like this:
/*
const board = [
  ['', '', 'X'],
  ['O', 'O', 'X'],
  ['', '', 'X']
]
*/
function whoWins(board) {
  let victoryCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const cells = board.flat()

  for (let comb of victoryCombinations) {
    if (
      cells[comb[0]] == cells[comb[1]] &&
      cells[comb[1]] == cells[comb[2]] &&
      cells[comb[0]] != ''
    ) {
      return cells[comb[0]]
    }
  }

  return false
}


export {
  whoWins
}
