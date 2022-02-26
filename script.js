
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

  const privFunc = (item, index) => {item.textContent = '_'}
  let turn = "one";
  const turnElement = document.querySelector(".turn");

  const fillBoard = () => {
    gameBoard.pubNodeList.forEach(privFunc);
  }

  const attachHandler = (item, index) => {
    // console.log(index);
    // console.log(item);
    item.addEventListener("click", changeTile);
  }


  const changeTile = (item, index) => {
    // update clicked tile textContent
    console.log(item.target);
    if (turn === "one") {
      console.log("x");
      item.target.textContent = 'X';
      turn = "two";
      turnElement.textContent = 'it is now player two\'s turn'
    } else {
      console.log("o");
      item.target.textContent = 'O';
      turn = "one";
      turnElement.textContent = 'it is now player one\'s turn'
    }
    //item.target.textContent = 'X';
  }
  return {changeTile, fillBoard, attachHandler}
})();



const playerOne = playerFactory('Todd');
const playerTwo = playerFactory('John');

gameBoard.pubNodeList.forEach(game.attachHandler);
// gameBoard.pubNodeList.forEach(item.addEventListener("click", game.changeTile));

// displayController.fillBoard();
game.fillBoard();