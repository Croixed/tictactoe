
const gameBoard = (() => {
  const gameArray = ['', '', '', '', '', '', '', '', ''];
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

  const progressGame = (item, index) => {
    // update clicked tile textContent
    console.log(item.target);
    if (turn === "one") {
      playTurn(item, "X", "name2", "two")
    } else {
      playTurn(item, "O", "name1", "one")
    }
    // if all 9 tiles are filled, display the result footer
    if (gameBoard.gameArray.every(i => i)) {makeFooter();}


    // or if someone wins early
    // console.log(allsame2(gameBoard.gameArray.slice(0,2)))
    if (  allsame(gameBoard.gameArray.slice(3,6))   ) {
      console.log("it's equal")
      makeFooter();
      //arr.every(val => val === arr[0])
      //someArray.slice(0, 2)
      //makeFooter();
    }
  }

  return {progressGame, attachHandler}
})();


const playerOne = playerFactory('Todd');
const playerTwo = playerFactory('John');

gameBoard.pubNodeList.forEach(game.attachHandler);
// gameBoard.pubNodeList.forEach(item.addEventListener("click", game.changeTile));

