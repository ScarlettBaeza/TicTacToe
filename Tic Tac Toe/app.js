document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const playerDisplay = document.querySelector('#player')

    let currPlayer = 'player1'

    squares.forEach(square=> {
        square.addEventListener('click', clickOutcome)
    })

    function clickOutcome(e){
        const squareArr = Array.from(squares)
        const index = squareArr.indexOf(e.target)
        playerDisplay.innerHTML = currPlayer

        if(currPlayer === 'player1'){
            squares[index].classList.add('player1')
            currPlayer = 'player2'
        }
        else {
            squares[index].classList.add('player2')
            currPlayer = 'player1'
        }
    }
})