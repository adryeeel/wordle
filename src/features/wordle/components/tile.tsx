import { cva } from 'class-variance-authority';

const tile = cva(
	// prettier-ignore
	['flex', 'items-center', 'justify-center', 'font-bold', 'size-7', 'sm:size-9', 'text-sm', 'sm:text-lg'],
	{
		variants: {
			color: {
				absent: ['bg-zinc-100', 'dark:bg-zinc-900'],
				correct: [
					'bg-emerald-600',
					'dark:bg-emerald-700',
					'text-emerald-50',
				],
			},
		},
	},
);

interface TileProps {
	label: string;
	color: 'absent' | 'correct';
}

export function Tile({ label, color }: TileProps) {
	return <div className={tile({ color })}>{label}</div>;
}
