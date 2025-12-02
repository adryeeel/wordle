import type { Variants } from 'motion/react';
import { motion, stagger } from 'motion/react';

import { useMotionCycle } from '@/hooks/use-motion-cycle';

interface SequentialProps {
	flip?: boolean;
	cycle?: boolean;
	className?: string;
	children: React.ReactNode;
}

export function Sequential(props: SequentialProps) {
	const { flip, cycle, className, children } = props;

	const variants: Variants = {
		initial: {},
		flip: { transition: { delayChildren: stagger(0.3) } },
	};

	const controls = useMotionCycle(['flip', 'initial'], cycle, 10_000);

	return (
		<motion.div
			initial='initial'
			variants={variants}
			className={className}
			animate={cycle ? controls : flip ? 'flip' : 'initial'}
		>
			{children}
		</motion.div>
	);
}
