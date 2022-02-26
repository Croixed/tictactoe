
const gameBoard = (() => {
  const gameArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
  const pubNodeList = document.querySelectorAll('.index');
  // pubNodeList.forEach(attachHandler);
  return {gameArray, pubNodeList};
})();


const playerFactory = (name) => {
  const getName = () => prompt("Enter your name: ")
  const sayHi = () => console.log('Hello, name!');
  return {name, sayHi};
};


// const displayController = (() => {
//   const pubVar = '???';
//   return {pubVar};
// })();


const game = (() => {
  const body = document.querySelector("body");
  let turn = "one";
  const turnElement = document.querySelector(".turn");
  const attachHandler = (item, index) => {
    // console.log(index);
    // console.log(item);
    item.addEventListener("click", progressGame);
  }

  const reset = () => {

  }

  const playTurn = (item, symbol, player, toggle) => {
    if (!item.target.textContent) {
      gameBoard.gameArray[item.target.classList[1]] = symbol;
      item.target.textContent = symbol;
      turn = toggle;
      turnElement.textContent = `it is now player ${player}\'s turn`;
    }
  }

  const makeFooter = () => {
    result = document.createElement("div");
    result.classList.add("footer");

    resultText = document.createElement("div");
    resultText.textContent = "Game Over!";
    result.appendChild(resultText);

    resultButton = document.createElement("button");
    resultButton.textContent = "Play Again";
    resultButton.addEventListener("click", () => {location.reload()})
    result.appendChild(resultButton);

    body.appendChild(result);
  }


  let allsame = function(arr) {return arr.every(function (e){return e == arr[0]})};
  let slicer = function(arr, ind1, ind2, ind3) {
    let newArr = [];
    newArr.push(arr[ind1]);
    newArr.push(arr[ind2]);
    newArr.push(arr[ind3]);
    return newArr
  }
  let checkWinner = function(arr) {
    if (allsame(arr.slice(3,6)) ||  
        allsame(arr.slice(0,3)) ||
        allsame(arr.slice(6,9)) ||
        allsame(slicer(arr, 0, 3, 6)) ||
        allsame(slicer(arr, 1, 4, 7)) ||
        allsame(slicer(arr, 2, 5, 8)) ||
        allsame(slicer(arr, 0, 4, 8)) ||
        allsame(slicer(arr, 2, 4, 6))
        ) {
      console.log("it's equal");
      makeFooter();
    } 
  }
  let counter = 0;

  const progressGame = (item, index) => {
    // update clicked tile textContent //(item.target)
    counter++
    if (turn === "one") {
      playTurn(item, "X", "name2", "two")
    } else {
      playTurn(item, "O", "name1", "one")
    }
    // if all 9 tiles are filled, display the result footer then exit progressGame
    if (counter === 9) {
      makeFooter()
      return
    };
    checkWinner(gameBoard.gameArray); // this can't possibly be the best way to check for gameover
  }

  return {progressGame, attachHandler}
})();


const playerOne = playerFactory('Todd');
const playerTwo = playerFactory('John');

gameBoard.pubNodeList.forEach(game.attachHandler);
// gameBoard.pubNodeList.forEach(item.addEventListener("click", game.changeTile));

