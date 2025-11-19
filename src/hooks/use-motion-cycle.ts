import { useEffect } from 'react';
import { wait } from '@/utils/utils-time';
import { useAnimation } from 'motion/react';

export function useMotionCycle(states: string[], run = true, delay = 0) {
	const controls = useAnimation();

	useEffect(() => {
		if (!run) return;

		let loop = true;

		const cycle = async () => {
			while (loop) {
				await controls.start(states[0]);
				await controls.start(states[1]);
				await wait(delay);
			}
		};

		void cycle();

		return () => {
			loop = false;
		};
	}, [controls, states, run, delay]);

	return controls;
}
