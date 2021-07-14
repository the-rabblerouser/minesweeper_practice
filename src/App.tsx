import React, { useState } from 'react';

import Button from './components/Button';
import { generateCells } from './utils';
import { Cell } from './types/types';

import './styles/App.css';

function App() {
	const [cells, setCells] = useState<Cell[][]>(generateCells());

	console.log(cells);

	const renderCells = (): React.ReactNode => {
		return cells.map((row, rowIndex) =>
			row.map((cell, colIndex) => (
				<Button
					key={`${rowIndex}-${colIndex}`}
					value={cell.value}
					state={cell.state}
				/>
			))
		);
	};

	return (
		<div className='App'>
			<h2>MineSweeper</h2>
			<div className='Body'>{renderCells()}</div>
		</div>
	);
}

export default App;
