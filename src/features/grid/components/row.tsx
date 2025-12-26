import { GRID } from '@/config/game';
import { range } from '@/utils/array';
import { useGameStore } from '@/stores/game';

import { Flipper, Sequential } from '@/components/internal';

import { Tile } from './tile';

interface RowProps {
	index: number;
}

export function Row({ index }: RowProps) {
	const position = useGameStore((state) => state.position);

	return (
		<Sequential
			flip={index < position.row}
			className='flex gap-1.5 sm:gap-2'
		>
			{range(GRID.cols).map((col) => (
				<Flipper
					key={col}
					back={<Tile row={index} col={col} />}
					front={<Tile row={index} col={col} />}
				/>
			))}
		</Sequential>
	);
}
