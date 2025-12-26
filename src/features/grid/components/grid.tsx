import { GRID } from '@/config/game';
import { range } from '@/utils/array';

import { Row } from './row';

export function Grid() {
	return (
		<div className='flex flex-col gap-1.5 sm:gap-2'>
			{range(GRID.rows).map((row) => (
				<Row key={row} index={row} />
			))}
		</div>
	);
}
