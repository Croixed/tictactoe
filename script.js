
const gameBoard = (() => {
  const gameArray = ['', '', '', '', '', '', '', '', ''];
  return {gameArray};
})();


const playerFactory = (name) => {
  const sayHi = () => console.log('Hello, name!');
  return {name, sayHi};
};


const displayController = (() => {
  const pubVar = 'public hi';
  const pubNodeList = document.querySelectorAll('.index');

  const privFunc = (item, index) => {
    item.textContent = '_';
    // console.log(index);
  }
  const fillBoard = () => {
    pubNodeList.forEach(privFunc);
    pubNodeList.forEach(attachHandler);
  }
  const attachHandler = (item) => {
    console.log(item);
    item.addEventListener("click", someFunc);
  }
  const someFunc = () => {console.log('hi')}
  return {pubVar, pubNodeList, fillBoard};
})();


const game = (() => {
  const changeTile = () => {
    // update clicked tile textContent
    console.log('tile updated');
  }
  return {changeTile}
})();



const playerOne = playerFactory('Todd');
const playerTwo = playerFactory('John');


displayController.fillBoard();