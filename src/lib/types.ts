export type WordType =
	| 'Content'
	| 'Pronoun'
	| 'Number'
	| 'Particle'
	| 'Compound';

export type Word = {
	word: string;
	type: WordType;

	noun: string;
	adjective: string;
	verb: string;
	particle: string;
	mairoot: string;
	
	origin: string;
	language: string;

	vimsonjo: string;
	kanji: string;

	extra: string;
};

export const wordTypeBackgroundColors: Record<WordType, string> = {
	Content: 'bg-orange-400 dark:bg-orange-600',
	Pronoun: 'bg-yellow-400 dark:bg-yellow-600',
	Number: 'bg-emerald-400 dark:bg-emerald-600',
	Particle: 'bg-cyan-400 dark:bg-cyan-600',
	Compound: 'bg-fuchsia-400 dark:bg-fuchsia-600'
};

export const wordTypeTextColors: Record<WordType, string> = {
	Content: 'text-orange-600 dark:text-orange-400',
	Pronoun: 'text-yellow-600 dark:text-yellow-400',
	Number: 'text-emerald-600 dark:text-emerald-400',
	Particle: 'text-cyan-600 dark:text-cyan-400',
	Compound: 'text-fuchsia-600 dark:text-fuchsia-400'
};

export const wordTypeBorderColors: Record<WordType, string> = {
	Content: 'border-orange-400 dark:border-orange-600',
	Pronoun: 'border-yellow-400 dark:border-yellow-600',
	Number: 'border-emerald-400 dark:border-emerald-600',
	Particle: 'border-cyan-400 dark:border-cyan-600',
	Compound: 'border-fuchsia-400 dark:border-fuchsia-600'
};
