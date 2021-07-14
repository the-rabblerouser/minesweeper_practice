import { max_row, max_col, bombs_amount } from '../constants';
import { Cell, CellState, CellValue } from '../types/types';

export const generateCells = (): Cell[][] => {
	let cells: Cell[][] = [];

	for (let row = 0; row < max_row; row++) {
		cells.push([]);
		for (let col = 0; col < max_col; col++) {
			cells[row].push({
				value: CellValue.none,

				state: CellState.open,
			});
		}
	}

	let bombsPlaced = 0;
	while (bombsPlaced < bombs_amount) {
		const randomRow = Math.floor(Math.random() * max_row);
		const randomCol = Math.floor(Math.random() * max_col);

		const currentCell = cells[randomRow][randomCol];
		if (currentCell.value !== CellValue.bomb) {
			cells = cells.map((row, rowIndex) =>
				row.map((cell, colIndex) => {
					if (randomRow === rowIndex && randomCol === colIndex) {
						return {
							...cell,
							value: CellValue.bomb,
						};
					}
					return cell;
				})
			);
			bombsPlaced++;
		}
	}

	return cells;
};
