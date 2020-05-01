import React from 'react';

import './ChessBoard.css';

const chessboardSize = 8;
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


function Number({ n }) {
	return <th>{n}</th>
}

function ABC(){
    return <tr>
		<td></td>
		{Array.from(new Array(chessboardSize)).map((_, index) => (
			<th key={index}>{alphabet.charAt(index)}</th>
		))}
		<td></td>
    </tr>
}

function Cell({ x, y }) {
	const isBlack = (x + y) % 2;

	return <td key={x} className={isBlack ? 'black-cell' : 'white-cell'}>
		{x}, {y}
	</td>
}

export default ({ }) => {
	return <table className="chessboard-table">
		<tbody>
			<ABC />

			{Array.from(new Array(chessboardSize)).map((_, y) => <tr key={y}>
				<Number n={chessboardSize - y} />
				{Array.from(new Array(chessboardSize)).map((_, x) => <Cell
					key={x}
					x={x}
					y={y}
				/>)}
				<Number n={chessboardSize - y} />

			</tr>)}

			<ABC />
		</tbody>
	</table>
}
