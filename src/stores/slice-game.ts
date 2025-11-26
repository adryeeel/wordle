import type { StateCreator } from 'zustand';
import type { GameSlice } from '@/types/game';

type CreateGameSlice = StateCreator<GameSlice, [], [], GameSlice>;

export const createGameSlice: CreateGameSlice = (set) => ({
	status: 'playing',
	setStatus: (status) => {
		set(() => ({ status }));
	},
});
