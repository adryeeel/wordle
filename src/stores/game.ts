import { create } from 'zustand/react';
import { persist } from 'zustand/middleware';

import type { GameStore } from '@/types/game';
import { createGameSlice } from '@/stores/slice-game';
import { rehydrateOnStorageEvent } from '@/utils/store';

import { createThemeSlice } from '@/features/theme';
import { createKeyboardSlice } from '@/features/keyboard';
import { createRowSlice, createGridSlice } from '@/features/grid';

export const useGameStore = create<GameStore>()(
	persist(
		(...a) => ({
			...createRowSlice(...a),
			...createGameSlice(...a),
			...createGridSlice(...a),
			...createThemeSlice(...a),
			...createKeyboardSlice(...a),
		}),
		{
			name: 'game-storage',
			partialize: (state) => ({ theme: state.theme }),
		},
	),
);

rehydrateOnStorageEvent<GameStore>(useGameStore);
