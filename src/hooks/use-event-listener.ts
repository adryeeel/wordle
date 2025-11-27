import { useEffect, useRef } from 'react';

type EventMap = WindowEventMap & DocumentEventMap & MediaQueryListEventMap;

type UseEventListener = <K extends keyof EventMap>(
	target: EventTarget,
	eventName: K,
	handler: (event: EventMap[K]) => void,
	options?: boolean | AddEventListenerOptions,
) => void;

export const useEventListener: UseEventListener = (
	target,
	eventName,
	handler,
	options,
) => {
	const savedHandler = useRef(handler);

	useEffect(() => {
		savedHandler.current = handler;
	}, [handler]);

	useEffect(() => {
		const callback = (event: Event) => {
			savedHandler.current(event as EventMap[typeof eventName]);
		};

		target.addEventListener(eventName, callback, options);

		return () => {
			target.removeEventListener(eventName, callback, options);
		};
	}, [target, eventName, options]);
};
