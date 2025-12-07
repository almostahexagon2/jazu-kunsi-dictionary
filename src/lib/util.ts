import type { Word } from './types';

const order = 'aiueopbtdkgmnszšžxcčrwj'.split(',');

export function sortAlphabetically(a: string | Word, b: string | Word) {
	if (typeof a === 'object') {
		a = a.word;
	}

	if (typeof b === 'object') {
		b = b.word;
	}

	const length = Math.min(a.length, b.length);

	for (let i = 0; i < length; i++) {
		const aIndex = order.indexOf(a[i]);
		const bIndex = order.indexOf(b[i]);

		if (aIndex !== bIndex) {
			return aIndex - bIndex;
		}
	}

	return a.length - b.length;
}
