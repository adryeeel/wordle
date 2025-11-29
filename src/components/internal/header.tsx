import { Separator } from '@/components/shadcn';
import { Logo, Github, ThemeToggle } from '@/components/internal';

import { Wordle } from '@/features/wordle';

export function Header() {
	return (
		<header>
			<div className='mx-auto flex max-w-6xl items-center justify-between p-2 sm:py-4'>
				<Logo />
				<Wordle />
				<div className='flex items-center'>
					<Github />
					<Separator
						orientation='vertical'
						className='mx-1.5 min-h-5 sm:mx-3'
					/>
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}
