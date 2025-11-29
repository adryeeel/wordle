import { SiGithub } from '@icons-pack/react-simple-icons';

import { Button } from '@/components/shadcn';

export function Github() {
	return (
		<a
			href='https://github.com/adryeeel'
			target='_blank'
			rel='noopener noreferrer'
		>
			<Button
				size='icon'
				variant='ghost'
				className='size-8 cursor-pointer'
			>
				<SiGithub />
			</Button>
		</a>
	);
}
