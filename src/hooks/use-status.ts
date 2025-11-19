import { useGameStore } from '@/stores/store-game';

interface UseStatus {
	isPlaying: boolean;
	isFinished: boolean;
	isChecking: boolean;
}

export function useStatus(): UseStatus {
	const status = useGameStore((state) => state.status);

	return {
		isPlaying: status === 'playing',
		isFinished: status === 'finished',
		isChecking: status === 'checking',
	};
}
