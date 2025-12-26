import { cva } from 'class-variance-authority';

import { useGameStore } from '@/stores/game';

import { resolveTileVariant } from '@/features/grid/helpers';

const tile = cva(
	// prettier-ignore
	['flex', 'items-center', 'justify-center', 'rounded-md', 'font-bold', 'size-15', 'sm:size-18', 'text-3xl', 'sm:text-5xl'],
	{
		variants: {
			intent: {
				active: ['border-2', 'border-border', 'cursor-pointer'],
				selected: [
					'border-2',
					'border-b-5',
					'border-border',
					'cursor-pointer',
				],
			},
			color: {
				none: ['bg-transparent'],
				absent: ['bg-zinc-300', 'dark:bg-zinc-800'],
				present: ['bg-yellow-500', 'dark:bg-yellow-600'],
				correct: ['bg-emerald-600', 'dark:bg-emerald-700'],
				default: ['bg-zinc-200/60', 'dark:bg-zinc-900/70'],
			},
		},
	},
);

interface TileProps {
	row: number;
	col: number;
	label?: string;
}

export function Tile({ label, row, col }: TileProps) {
	const position = useGameStore((state) => state.position);
	const variant = resolveTileVariant(position, { row, col });

	return (
		<button type='button' className={tile(variant)}>
			<span className='font-medium'>{label}</span>
		</button>
	);
}
