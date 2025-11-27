import { Grid } from '@/features/grid';
import { Keyboard } from '@/features/keyboard';

import { Header, Footer } from '@/components/internal';

import '@/styles/fonts.css';
import '@/styles/global.css';

export function App() {
	return (
		<div className='grid min-h-dvh grid-rows-[auto_1fr_auto] font-[Inter]'>
			<Header />
			<main className='flex flex-col items-center gap-2'>
				<Grid />
				<Keyboard />
			</main>
			<Footer />
		</div>
	);
}
