import type { Status } from '@/types/union';
import type { ThemeSlice } from '@/features/theme';
import type { KeyboardSlice } from '@/features/keyboard';
import type { GridSlice, RowsSlice } from '@/features/grid';

interface GameState {
	status: Status;
}

interface GameAction {
	setStatus: (status: Status) => void;
}

export type GameSlice = GameState & GameAction;

export type GameStore = GameSlice &
	GridSlice &
	RowsSlice &
	ThemeSlice &
	KeyboardSlice;
