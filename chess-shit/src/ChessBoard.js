import React from 'react';

import './ChessBoard.css';

const chessboardSize = 8;
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function Number({ n }) {
	return <th>{n}</th>
}

function ABC({ width }){
    return <tr>
		<td></td>
		{Array.from(new Array(width)).map((_, index) => (
			<th key={index}>{alphabet.charAt(index)}</th>
		))}
		<td></td>
	</tr>
}

function Cell({ x, y, board }) {
	const isBlack = (x + y) % 2;
	const piece = board.getPieceAtCoordinate(x, y);

	
	return <td key={x} className={isBlack ? 'black-cell' : 'white-cell'}>
		{
			piece ? piece.iconName : '(no piece)'
		}
	</td>
}

export default ({ board }) => {
	const chessboardSize = board.width;

	return <table className="chessboard-table" cellSpacing={0}>
		<tbody>
			<ABC width={board.width}/>

			{Array.from(new Array(board.height)).map((_, y) => <tr key={y}>
				<Number n={board.height - y} />
				{Array.from(new Array(board.width)).map((_, x) => <Cell
					key={x}
					x={x}
					y={y}
					board={board}
				/>)}
				<Number n={board.height - y} />

			</tr>)}

			<ABC width={board.width}/>
		</tbody>
	</table>
}
