// Get the DOM
const body = document.querySelector(`body`);
const cellList = [];

// Create cells
const createCells = (count) => {
	let idCounter = 0;
	for (let i = 0; i < count; i++) {
		const cell = document.createElement(`div`);
		cell.classList.add(`cell`);
		cell.id = `el-${idCounter++}`;
		cellList.push(cell);
	}
	return cellList;
};

// Create the game board
const gameBoard = document.createElement(`section`);
gameBoard.classList.add(`gameBoard`);
body.append(gameBoard);

// Put cells in the game board
const cells = createCells(9);
cells.forEach((cell) => {
	return gameBoard.append(cell);
});

// Handle cell click
let currentPlayer = `X`;
cells.forEach((cell) => {
	cell.addEventListener(`click`, (event) => {
		const getCell = event.target.id;

		if (!cell.textContent) {
			cell.textContent = currentPlayer;
			currentPlayer = currentPlayer === `X` ? `O` : `X`;
		}
	});
});

// Check if all celles are filled
const checkDraw = () => {
	return cells.every((cell) => cell.textContent);
};

// Check if a player has won
const checkWin = () => {
	const winConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	return winConditions.some((condition) => {
		const [a, b, c] = condition;
		return (
			cells[a].textContent &&
			cells[a].textContent === cells[b].textContent &&
			cells[a].textContent === cells[c].textContent
		);
	});
}

// Check game status after each move
cells.forEach((cell) => {
	cell.addEventListener(`click`, () => {
		if (checkWin()) {
			setTimeout(() => {
				alert(`${currentPlayer === `X` ? `O` : `X`} wins!`);
				cells.forEach((cell) => (cell.textContent = ``));
			}, 100);
		} else if (checkDraw()) {
			setTimeout(() => {
				alert(`It's a draw!`);
				cells.forEach((cell) => (cell.textContent = ``));
			}, 100);
		}
	});
});
