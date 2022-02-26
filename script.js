
const gameBoard = (() => {
  const gameArray = ['', '', '', '', '', '', '', '', ''];
  const pubNodeList = document.querySelectorAll('.index');
  // pubNodeList.forEach(attachHandler);
  return {gameArray, pubNodeList};
})();


const playerFactory = (name) => {
  const sayHi = () => console.log('Hello, name!');
  return {name, sayHi};
};


// const displayController = (() => {
//   const pubVar = '???';
//   return {pubVar};
// })();


const game = (() => {
  let turn = "one";
  const turnElement = document.querySelector(".turn");
  const attachHandler = (item, index) => {
    // console.log(index);
    // console.log(item);
    item.addEventListener("click", changeTile);
  }


  const changeTile = (item, index) => {
    // update clicked tile textContent
    console.log(item.target);
    if (gameBoard.gameArray.every(element => element === true)) {// if all 9 tiles are filled, 
      console.log("finished");
    }
    if (turn === "one") {
      if (!item.target.textContent) {
        console.log("x");
        gameBoard.gameArray[item.target.classList[1]] = "X";
        item.target.textContent = 'X';
        turn = "two";
        turnElement.textContent = 'it is now player two\'s turn';
      }
    } else {
      // duplicated code should be put into a function and then called twice
      if (!item.target.textContent) {
        console.log("o");
        gameBoard.gameArray[item.target.classList[1]] = "O";
        //gameBoard.gameArray[]
        item.target.textContent = 'O';
        turn = "one";
        turnElement.textContent = 'it is now player one\'s turn';
      }
    }
    if (gameBoard.gameArray.every(i => i)) {
      // if all 9 tiles are filled, log "finished"
      console.log("finished");
    }
  }

  return {changeTile, attachHandler}
})();



const playerOne = playerFactory('Todd');
const playerTwo = playerFactory('John');

gameBoard.pubNodeList.forEach(game.attachHandler);
// gameBoard.pubNodeList.forEach(item.addEventListener("click", game.changeTile));

// displayController.fillBoard();
// game.fillBoard();