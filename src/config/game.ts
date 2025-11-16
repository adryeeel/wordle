export const GAME = {
	wordLength: 5,
	maxAttempts: 6,
	solution: 'APPLE',
} as const;

export const GRID = {
	cols: GAME.wordLength,
	rows: GAME.maxAttempts,
} as const;

export const KEYBOARD = {
	keys: [
		['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
		['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
		['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace'],
	],
} as const;
