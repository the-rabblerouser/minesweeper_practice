import React from 'react';
import { CellValue, CellState } from '../../types/types';

import './Button.css';

interface ButtonProps {
	value: CellValue;
	state: CellState;
}
const Button = ({ value, state }: ButtonProps) => {
	const renderContent = (): React.ReactNode => {
		if (state === CellState.visible) {
			if (value === CellValue.bomb) {
				return <div>💣</div>;
			}
		}
		if (state === CellState.flagged) {
			return <span>🚩</span>;
		}
		return null;
	};
	return (
		<div
			className='Button'
			style={{
				width: '2rem',
				height: '2rem',
				padding: '1.2rem',
				border: '1px solid grey',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			{renderContent()}
		</div>
	);
};

export default Button;
