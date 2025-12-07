<script lang="ts">
	import { wordTypeTextColors, type Word } from '$lib/types';

	export let word: Word;
</script>

<p>
	<a href="/{word.word}" class="hocus-visible:text-blue-500 transition">
		<span class="font-bold">{word.word}</span>
		&middot;
		<span class="font-bold">{word.kanji}</span>
		&middot;
		<span class="font-bold">{word.vimsonjo}</span>
	</a>
	<span class="text-xs {wordTypeTextColors[word.type]}">
		{word.type.toLowerCase()}
	</span>
	<!-- <span>{word.meaning}</span> -->
</p>
