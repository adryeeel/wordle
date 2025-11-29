import wordmark_max from '@/assets/wordmark-max.png';
import wordmark_min from '@/assets/wordmark-min.png';

export function Logo() {
	return (
		<div>
			<img
				src={wordmark_min}
				alt='arocha logo'
				className='max-w-7 opacity-90 sm:hidden sm:max-w-25 dark:invert'
			/>
			<img
				src={wordmark_max}
				alt='arocha logo'
				className='hidden max-w-20 opacity-90 sm:block sm:max-w-25 dark:invert'
			/>
		</div>
	);
}
