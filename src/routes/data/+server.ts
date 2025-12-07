import { json } from '@sveltejs/kit';
// import { GOOGLE_KEY } from '$env/static/private';
import type { Word } from '$lib/types';
import { sortAlphabetically } from '$lib/util.js';

const GOOGLE_KEY = 'AIzaSyCjQVz242YwBGpsR8S64BKi0p4grBz_tGI';
const SHEETS_API_BASE = 'https://sheets.googleapis.com/v4/spreadsheets';
const SHEET_NAME = 'Dictionary';
const SHEET_ID = '1gE55EKK43mmfrR0zy4OA5NrmpPlrAvJSjspnplZXW-Q';

const keys: Record<string, keyof Word> = {
	Word: 'word',
	Type: 'type',
	Noun: 'noun',
	Adjective: 'adjective',
	Verb: 'verb',
	Particle: 'particle',
	Origin: 'origin',
	Language: 'language',
	Vimsonjo: 'vimsonjo',
	Kanji: 'kanji',
	Mairoot: 'mairoot',
	Extra: 'extra'
};

export async function GET({ fetch, setHeaders }) {
	const url = `${SHEETS_API_BASE}/${SHEET_ID}/values/${SHEET_NAME}?key=${GOOGLE_KEY}`;
	const response = await fetch(url);

	if (!response.ok) {
		console.error(
			'Google Sheets API error:',
			response.status,
			response.statusText
		);
		return json([]);
	}

	const data = await response.json();

	if (!data.values) {
		return json([]);
	}

	const firstRow = data.values.shift() as string[];

	const words = data.values
		.map((row: string[]) => {
			const w = {} as Word;
			for (let i = 0; i < row.length; i++) {
				const key = keys[firstRow[i]];
				// @ts-expect-error: WordType should always be correct
				w[key] = row[i];
			}
			return w;
		})
		.sort(sortAlphabetically);

	setHeaders({
		'Cache-Control': 's-maxage=3600'
	});

	return json(words);
}
