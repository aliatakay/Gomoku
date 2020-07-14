const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const WINNING_COMBINATIONS = [
  //1 row
  [0, 1, 2, 3, 4],
  [1, 2, 3, 4, 5],
  [2, 3, 4, 5, 6],
  [3, 4, 5, 6, 7],
  [4, 5, 6, 7, 8],
  [5, 6, 7, 8, 9],
  [6, 7, 8, 9, 10],
  [7, 8, 9, 10, 11],

  //2 row
  [12, 13, 14, 15, 16],
  [13, 14, 15, 16, 17],
  [14, 15, 16, 17, 18],
  [15, 16, 17, 18, 19],
  [16, 17, 18, 19, 20],
  [17, 18, 19, 20, 21],
  [18, 19, 20, 21, 22],
  [19, 20, 21, 22, 23],

  //3 row
  [24, 25, 26, 27, 28],
  [25, 26, 27, 28, 29],
  [26, 27, 28, 29, 30],
  [27, 28, 29, 30, 31],
  [28, 29, 30, 31, 32],
  [29, 30, 31, 32, 33],
  [30, 31, 32, 33, 34],
  [31, 32, 33, 34, 35],

  //4 row
  [36, 37, 38, 39, 40],
  [37, 38, 39, 40, 41],
  [38, 39, 40, 41, 42],
  [39, 40, 41, 42, 43],
  [40, 41, 42, 43, 44],
  [41, 42, 43, 44, 45],
  [42, 43, 44, 45, 46],
  [43, 44, 45, 46, 47],

  //5 row
  [48, 49, 50, 51, 52],
  [49, 50, 51, 52, 53],
  [50, 51, 52, 53, 54],
  [51, 52, 53, 54, 55],
  [52, 53, 54, 55, 56],
  [53, 54, 55, 56, 57],
  [54, 55, 56, 57, 58],
  [55, 56, 57, 58, 59],

  //6 row
  [60, 61, 62, 63, 64],
  [61, 62, 63, 64, 65],
  [62, 63, 64, 65, 66],
  [63, 64, 65, 66, 67],
  [64, 65, 66, 67, 68],
  [65, 66, 67, 68, 69],
  [66, 67, 68, 69, 70],
  [67, 68, 69, 70, 71],

  //7 row
  [72, 73, 74, 75, 76],
  [73, 74, 75, 76, 77],
  [74, 75, 76, 77, 78],
  [75, 76, 77, 78, 79],
  [76, 77, 78, 79, 80],
  [77, 78, 79, 80, 81],
  [78, 79, 80, 81, 82],
  [79, 80, 81, 82, 83],

  //8 row
  [84, 85, 86, 87, 88],
  [85, 86, 87, 88, 89],
  [86, 87, 88, 89, 90],
  [87, 88, 89, 90, 91],
  [88, 89, 90, 91, 92],
  [89, 90, 91, 92, 93],
  [90, 91, 92, 93, 94],
  [91, 92, 93, 94, 95],

  //9 row
  [96, 97, 98, 99, 100],
  [97, 98, 99, 100, 101],
  [98, 99, 100, 101, 102],
  [99, 100, 101, 102, 103],
  [100, 101, 102, 103, 104],
  [101, 102, 103, 104, 105],
  [102, 103, 104, 105, 106],
  [103, 104, 105, 106, 107],

  //10 row
  [108, 109, 110, 111, 112],
  [109, 110, 111, 112, 113],
  [110, 111, 112, 113, 114],
  [111, 112, 113, 114, 115],
  [112, 113, 114, 115, 116],
  [113, 114, 115, 116, 117],
  [114, 115, 116, 117, 118],
  [115, 116, 117, 118, 119],

  //11 row
  [120, 121, 122, 123, 124],
  [121, 122, 123, 124, 125],
  [122, 123, 124, 125, 126],
  [123, 124, 125, 126, 127],
  [124, 125, 126, 127, 128],
  [125, 126, 127, 128, 129],
  [126, 127, 128, 129, 130],
  [127, 128, 129, 130, 131],

  //12 row
  [132, 133, 134, 135, 136],
  [133, 134, 135, 136, 137],
  [134, 135, 136, 137, 138],
  [135, 136, 137, 138, 139],
  [136, 137, 138, 139, 140],
  [137, 138, 139, 140, 141],
  [138, 139, 140, 141, 142],
  [139, 140, 141, 142, 143],

  //1 col
  [0, 12, 24, 36, 48],
  [12, 24, 36, 48, 60],
  [24, 36, 48, 60, 72],
  [36, 48, 60, 72, 84],
  [48, 60, 72, 84, 96],
  [60, 72, 84, 96, 108],
  [72, 84, 96, 108, 120],
  [84, 96, 108, 120, 132],

  //2 col
  [1, 13, 25, 37, 49],
  [13, 25, 37, 49, 61],
  [25, 37, 49, 61, 73],
  [37, 49, 61, 73, 85],
  [49, 61, 73, 85, 97],
  [61, 73, 85, 97, 109],
  [73, 85, 97, 109, 121],
  [85, 97, 109, 121, 133],

  //3 col
  [2, 14, 26, 38, 50],
  [14, 26, 38, 50, 62],
  [26, 38, 50, 62, 74],
  [38, 50, 62, 74, 86],
  [50, 62, 74, 86, 98],
  [62, 74, 86, 98, 110],
  [74, 86, 98, 110, 122],
  [86, 98, 110, 122, 134],

  //4 col
  [3, 15, 27, 39, 51],
  [15, 27, 39, 51, 63],
  [27, 39, 51, 63, 75],
  [39, 51, 63, 75, 87],
  [51, 63, 75, 87, 99],
  [63, 75, 87, 99, 111],
  [75, 87, 99, 111, 123],
  [87, 99, 111, 123, 135],

  //5 col
  [4, 16, 28, 40, 52],
  [16, 28, 40, 52, 64],
  [28, 40, 52, 64, 76],
  [40, 52, 64, 76, 88],
  [52, 64, 76, 88, 100],
  [64, 76, 88, 100, 112],
  [76, 88, 100, 112, 124],
  [88, 100, 112, 124, 136],

  //6 col
  [5, 17, 29, 41, 53],
  [17, 29, 41, 53, 65],
  [29, 41, 53, 65, 77],
  [41, 53, 65, 77, 89],
  [53, 65, 77, 89, 101],
  [65, 77, 89, 101, 113],
  [77, 89, 101, 113, 125],
  [89, 101, 113, 125, 137],

  //7 col
  [6, 18, 30, 42, 54],
  [18, 30, 42, 54, 66],
  [30, 42, 54, 66, 78],
  [42, 54, 66, 78, 90],
  [54, 66, 78, 90, 102],
  [66, 78, 90, 102, 114],
  [78, 90, 102, 114, 126],
  [90, 102, 114, 126, 138],

  //8 col
  [7, 19, 31, 43, 55],
  [19, 31, 43, 55, 67],
  [31, 43, 55, 67, 79],
  [43, 55, 67, 79, 91],
  [55, 67, 79, 91, 103],
  [67, 79, 91, 103, 115],
  [79, 91, 103, 115, 127],
  [91, 103, 115, 127, 139],

  //9 col
  [8, 20, 32, 44, 56],
  [20, 32, 44, 56, 68],
  [32, 44, 56, 68, 80],
  [44, 56, 68, 80, 92],
  [56, 68, 80, 92, 104],
  [68, 80, 92, 104, 116],
  [80, 92, 104, 116, 128],
  [92, 104, 116, 128, 140],

  //10 col
  [9, 21, 33, 45, 57],
  [21, 33, 45, 57, 69],
  [33, 45, 57, 69, 81],
  [45, 57, 69, 81, 93],
  [57, 69, 81, 93, 105],
  [69, 81, 93, 105, 117],
  [81, 93, 105, 117, 129],
  [93, 105, 117, 129, 141],

  //11 col
  [10, 22, 34, 46, 58],
  [22, 34, 46, 58, 70],
  [34, 46, 58, 70, 82],
  [46, 58, 70, 82, 94],
  [58, 70, 82, 94, 106],
  [70, 82, 94, 106, 118],
  [82, 94, 106, 118, 130],
  [94, 106, 118, 130, 142],

  //12 col
  [11, 23, 35, 47, 59],
  [23, 35, 47, 59, 71],
  [35, 47, 59, 71, 83],
  [47, 59, 71, 83, 95],
  [59, 71, 83, 95, 107],
  [71, 83, 95, 107, 119],
  [83, 95, 107, 119, 131],
  [95, 107, 119, 131, 143],

  //1 cross
  [4, 15, 26, 37, 48],

  [5, 16, 27, 38, 49],
  [16, 27, 38, 49, 60],

  [6, 17, 28, 39, 50],
  [17, 28, 39, 50, 61],
  [28, 39, 50, 61, 72],

  [7, 18, 29, 40, 51],
  [18, 29, 40, 51, 62],
  [29, 40, 51, 62, 73],
  [40, 51, 62, 73, 84],

  [8, 19, 30, 41, 52],
  [19, 30, 41, 52, 63],
  [30, 41, 52, 63, 74],
  [41, 52, 63, 74, 85],
  [52, 63, 74, 85, 96],

  [9, 20, 31, 42, 53],
  [20, 31, 42, 53, 64],
  [31, 42, 53, 64, 75],
  [42, 53, 64, 75, 86],
  [53, 64, 75, 86, 97],
  [64, 75, 86, 97, 108],

  [10, 21, 32, 43, 54],
  [21, 32, 43, 54, 65],
  [32, 43, 54, 65, 76],
  [43, 54, 65, 76, 87],
  [54, 65, 76, 87, 98],
  [65, 76, 87, 98, 109],
  [76, 87, 98, 109, 120],

  [11, 22, 33, 44, 55],
  [22, 33, 44, 55, 66],
  [33, 44, 55, 66, 77],
  [44, 55, 66, 77, 88],
  [55, 66, 77, 88, 99],
  [66, 77, 88, 99, 110],
  [77, 88, 99, 110, 121],
  [88, 99, 110, 121, 132],

  [95, 106, 117, 128, 139],

  [83, 94, 105, 116, 127],
  [94, 105, 116, 127, 138],

  [71, 82, 93, 104, 115],
  [82, 93, 104, 115, 126],
  [93, 104, 115, 126, 137],

  [59, 70, 81, 92, 103],
  [70, 81, 92, 103, 114],
  [81, 92, 103, 114, 125],
  [92, 103, 114, 125, 136],

  [47, 58, 69, 80, 91],
  [58, 69, 80, 91, 102],
  [69, 80, 91, 102, 113],
  [80, 91, 102, 113, 124],
  [91, 102, 113, 124, 135],

  [35, 46, 57, 68, 79],
  [46, 57, 68, 79, 90],
  [57, 68, 79, 90, 101],
  [68, 79, 90, 101, 112],
  [79, 90, 101, 112, 123],
  [90, 101, 112, 123, 134],

  [23, 34, 45, 56, 67],
  [34, 45, 56, 67, 78],
  [45, 56, 67, 78, 89],
  [56, 67, 78, 89, 100],
  [67, 78, 89, 100, 111],
  [78, 89, 100, 111, 122],
  [89, 100, 111, 122, 133],

  //2 cross
  [7, 20, 33, 46, 59],

  [6, 19, 32, 45, 58],
  [19, 32, 45, 58, 71],

  [5, 18, 31, 44, 57],
  [18, 31, 44, 57, 70],
  [31, 44, 57, 70, 83],

  [4, 17, 30, 43, 56],
  [17, 30, 43, 56, 69],
  [30, 43, 56, 69, 82],
  [43, 56, 69, 82, 95],

  [3, 16, 29, 42, 55],
  [16, 29, 42, 55, 68],
  [29, 42, 55, 68, 81],
  [42, 55, 68, 81, 94],
  [55, 68, 81, 94, 107],

  [2, 15, 28, 41, 54],
  [15, 28, 41, 54, 67],
  [28, 41, 54, 67, 80],
  [41, 54, 67, 80, 93],
  [54, 67, 80, 93, 106],
  [67, 80, 93, 106, 119],

  [1, 14, 27, 40, 53],
  [14, 27, 40, 53, 66],
  [27, 40, 53, 66, 79],
  [40, 53, 66, 79, 92],
  [53, 66, 79, 92, 105],
  [66, 79, 92, 105, 118],
  [79, 92, 105, 118, 131],

  [0, 13, 26, 39, 52],
  [13, 26, 39, 52, 65],
  [26, 39, 52, 65, 78],
  [39, 52, 65, 78, 91],
  [52, 65, 78, 91, 104],
  [65, 78, 91, 104, 117],
  [78, 91, 104, 117, 130],
  [91, 104, 117, 130, 143],

  [84, 97, 110, 123, 136],

  [72, 85, 98, 111, 124],
  [85, 98, 111, 124, 137],

  [60, 73, 86, 99, 112],
  [73, 86, 99, 112, 125],
  [86, 99, 112, 125, 138],

  [48, 61, 74, 87, 100],
  [61, 74, 87, 100, 113],
  [74, 87, 100, 113, 126],
  [87, 100, 113, 126, 139],

  [36, 49, 62, 75, 88],
  [49, 62, 75, 88, 101],
  [62, 75, 88, 101, 114],
  [75, 88, 101, 114, 127],
  [88, 101, 114, 127, 140],

  [24, 37, 50, 63, 76],
  [37, 50, 63, 76, 89],
  [50, 63, 76, 89, 102],
  [63, 76, 89, 102, 115],
  [76, 89, 102, 115, 128],
  [89, 102, 115, 128, 141],

  [12, 25, 38, 51, 64],
  [25, 38, 51, 64, 77],
  [38, 51, 64, 77, 90],
  [51, 64, 77, 90, 103],
  [64, 77, 90, 103, 116],
  [77, 90, 103, 116, 129],
  [90, 103, 116, 129, 142]
];

const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const winningMessageElement = document.getElementById("winningMessage");
const restartButton = document.getElementById("restartButton");
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
let circleTurn;

startGame();

restartButton.addEventListener("click", startGame);

function startGame() {
  circleTurn = false;
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
  winningMessageElement.classList.remove("show");
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    setBoardHoverClass();
  }
}

function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = "Draw!";
  } else {
    if (circleTurn) {
      winningMessageTextElement.innerText = `'O' Wins!`;
    } else {
      winningMessageTextElement.innerText = `'X' Wins!`;
    }
  }
  winningMessageElement.classList.add("show");
}

function isDraw() {
  return [...cellElements].every(cell => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    );
  });
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}
