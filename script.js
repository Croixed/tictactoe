
const gameBoard = (() => {
  const gameArray = ['', '', '', '', '', '', '', '', ''];
  const pubNodeList = document.querySelectorAll('.index');

  const attachHandler = (item, index) => {
    console.log(index);
    console.log(item);
    item.addEventListener("click", handlerLog);
  }

  const handlerLog = (e) => {console.log(e.target.classList[1])}
  pubNodeList.forEach(attachHandler);
  
  return {gameArray, pubNodeList};
  
})();


const playerFactory = (name) => {
  const sayHi = () => console.log('Hello, name!');
  return {name, sayHi};
};


const displayController = (() => {
  const pubVar = 'public hi';
  return {pubVar};
})();


const game = (() => {

  const privFunc = (item, index) => {item.textContent = '_'}

  const fillBoard = () => {
    gameBoard.pubNodeList.forEach(privFunc);
  }


  const changeTile = () => {
    // update clicked tile textContent
    console.log('tile updated');
  }
  return {changeTile, fillBoard}
})();



const playerOne = playerFactory('Todd');
const playerTwo = playerFactory('John');


// displayController.fillBoard();
game.fillBoard();