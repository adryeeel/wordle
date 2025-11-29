import { motion } from 'motion/react';
import type { Variants } from 'motion/react';

interface FlipperProps {
	back: React.ReactNode;
	front: React.ReactNode;
}

export function Flipper({ back, front }: FlipperProps) {
	const parent: Variants = {
		flip: {},
		initial: {},
	};

	const frontface: Variants = {
		flip: { rotateX: 180 },
		initial: { rotateX: 0 },
	};

	const backface: Variants = {
		flip: { rotateX: 0 },
		initial: { rotateX: 180 },
	};

	return (
		<motion.div
			variants={parent}
			className={`perspective-1000 relative grid max-w-min`}
		>
			<motion.div
				variants={frontface}
				className='col-start-1 row-start-1 backface-hidden'
			>
				{front}
			</motion.div>

			<motion.div
				variants={backface}
				className='col-start-1 row-start-1 backface-hidden'
			>
				{back}
			</motion.div>
		</motion.div>
	);
}
