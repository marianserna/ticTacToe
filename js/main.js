document.addEventListener("DOMContentLoaded", () => {
  // const options = ['O', 'X'];
  let currentTurn = 'X';

  const squares = document.querySelectorAll('.square');

  squares.forEach((square) => {
    square.addEventListener('click', (e) => {
      if (square.innerText !== 'X' && square.innerText !== 'O') {
        square.innerText = currentTurn;

        currentTurn = (currentTurn === 'O' ? 'X' : 'O');
      }
    });
  });
});
