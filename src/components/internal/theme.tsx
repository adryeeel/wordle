import { useRef } from 'react';
import { Sun, Moon, SunMoon } from 'lucide-react';

import { themeSkip } from '@/features/theme/helpers';
import { useTheme, themeTransition } from '@/features/theme';

import { Button } from '@/components/shadcn';

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();
	const ref = useRef<HTMLButtonElement>(null);

	const icons = {
		dark: <Moon />,
		light: <Sun />,
		auto: <SunMoon className='size-4 sm:size-5' />,
	};

	const handler = async () => {
		if (themeSkip(theme)) {
			toggleTheme();
			return;
		}

		const { ready } = document.startViewTransition(() => {
			toggleTheme();
		});

		await ready;
		themeTransition(ref.current);
	};

	return (
		<Button
			ref={ref}
			size='icon'
			variant='ghost'
			aria-label='Toggle Theme'
			onClick={() => void handler()}
			className='size-8 cursor-pointer'
		>
			{icons[theme]}
		</Button>
	);
}
