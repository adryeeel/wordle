import { Flipper, Sequential } from '@/components/internal';

import { Tile } from './tile';

export function Wordle() {
	const wordle = ['W', 'O', 'R', 'D', 'L', 'E'];

	return (
		<Sequential cycle className='flex gap-1 sm:gap-1.5'>
			{wordle.map((ch) => (
				<Flipper
					key={ch}
					back={<Tile label={ch} color='correct' />}
					front={<Tile label={ch} color='absent' />}
				/>
			))}
		</Sequential>
	);
}
