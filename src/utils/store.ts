import type { StoreApi, UseBoundStore } from 'zustand';

type PersistOptionsLike = {
	name?: string;
};

interface PersistedStore<T> extends StoreApi<T> {
	persist: {
		getOptions(): PersistOptionsLike;
		rehydrate(): void | Promise<void>;
	};
}

export function rehydrateOnStorageEvent<T>(
	store: UseBoundStore<PersistedStore<T>>,
) {
	window.addEventListener('storage', (e) => {
		const { name } = store.persist.getOptions();
		if (e.key === name && e.newValue) void store.persist.rehydrate();
	});
}
