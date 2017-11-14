document.addEventListener("DOMContentLoaded", () => {
  const col1Row1 = document.querySelector('.col1 .row1');
  const col1Row2 = document.querySelector('.col1 .row2');
  const col1Row3 = document.querySelector('.col1 .row3');

  const col2Row1 = document.querySelector('.col2 .row1');
  const col2Row2 = document.querySelector('.col2 .row2');
  const col2Row3 = document.querySelector('.col2 .row3');

  const col3Row1 = document.querySelector('.col3 .row1');
  const col3Row2 = document.querySelector('.col3 .row2');
  const col3Row3 = document.querySelector('.col3 .row3');


  let currentTurn = 'X';
  const winningOptions = [
    [ col1Row1, col2Row1, col3Row1 ],
    [ col1Row2, col2Row2, col3Row2 ],
    [ col1Row3, col2Row3, col3Row3 ],
    [ col1Row1, col1Row2, col1Row3 ],
    [ col2Row1, col2Row2, col2Row3 ],
    [ col3Row1, col3Row2, col3Row3 ],
    [ col1Row1, col2Row2, col3Row3 ],
    [ col1Row3, col2Row2, col3Row1 ]
  ]

  const squares = document.querySelectorAll('.square');

  squares.forEach((square) => {
    square.addEventListener('click', (e) => {
      if (square.innerText !== 'X' && square.innerText !== 'O') {
        square.innerText = currentTurn;

        if (checkWinner()) {
          setTimeout(() => {
            alert(`The winner is ${currentTurn}`);
            resetBoard();
          }, 1000);
        } else {
          if (gameOver()) {
            setTimeout(() => {
              alert(`Game Over`);
              resetBoard();
            }, 1000);
          } else {
            currentTurn = (currentTurn === 'O' ? 'X' : 'O');
          }
        }
      }
    });
  });

  checkWinner = () => {
    const winner = winningOptions.some((option) => {
      return option.every((optionItem) => {
        return optionItem.innerText === currentTurn
      });
    });
    return winner;
  }

  gameOver = () => {
    return Array.from(squares).every((square) => {
      return square.innerText === 'X' || square.innerText === 'O';
    });
  }

  resetBoard = () => {
    col1Row1.innerText = '1';
    col1Row2.innerText = '4';
    col1Row3.innerText = '7';

    col2Row1.innerText = '2';
    col2Row2.innerText = '5';
    col2Row3.innerText = '8';

    col3Row1.innerText = '3';
    col3Row2.innerText = '6';
    col3Row3.innerText = '9';
  }
});
