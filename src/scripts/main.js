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














