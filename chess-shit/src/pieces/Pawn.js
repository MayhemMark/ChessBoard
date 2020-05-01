export class Board {
	constructor(width, height) {
		this.width = width;
		this.height = height;

		this.squares = Array.from(new Array(width)).map(x => {
			return Array.from(new Array(height))
		}); 
	}

	getPieceAtCoordinate (x, y) {
		return this.squares[x][y] || null;
	}

	addPieceToCoordinate(x, y, piece) {
		const pieceAlreadyOnThisLocation = this.getPieceAtCoordinate(x, y);
		if (pieceAlreadyOnThisLocation) {
			if (piece.player !== pieceAlreadyOnThisLocation.player) {
				// Players are not the same, so they are hostile
				// @TODO
				pieceAlreadyOnThisLocation.kill();
			} else {
				throw new Error('You cant place two pieces on the same square!');
			}
		}

		this.squares[x][y] = piece;
	}
}

class Piece {
	player = undefined;

	lay = true;
	
	constructor(player) {
		this.player = player;
	}

	removeFromBoard() {
		this.inPlay = false;
	}

	getPossibleNextMoves() {
		throw new Error('Not implemented');
	}
}

export class Pawn extends Piece {
	iconName = 'pawn';
	getPossibleNextMoves() {
		// afegsrhdtjy
	}
}

export class Knight extends Piece {
	iconName = 'knight';
	getPossibleNextMoves() {
		// afegsrhdtjy
	}
}

export class Bishop extends Piece {
	iconName = 'bishop';
	getPossibleNextMoves() {
		// afegsrhdtjy
	}
}

export class Rook extends Piece {
	iconName = 'rook';
	getPossibleNextMoves() {
		// afegsrhdtjy
	}
}

export class King extends Piece {
	iconName = 'king';
	getPossibleNextMoves() {
		// afegsrhdtjy
	}
}

export class Queen extends Piece {
	iconName = 'queen';
	getPossibleNextMoves() {
		// afegsrhdtjy
	}
}