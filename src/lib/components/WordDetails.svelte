<script lang="ts">
	import type { Word } from '$lib/types';

	export let word: Word;
	export let compact = true;
</script>

<div class:compact>
	<p class="faded">{word.type.toLowerCase()}</p>
	{#if word.noun}
		<p class="space">
			{word.noun}
		</p>
	{/if}

	{#if word.adjective}
		<p class="space">
			<b>{word.word}i</b> &middot;
			{word.adjective}
		</p>
	{/if}

	{#if word.verb}
		<p class="space">
			<b>{word.word}ri</b> &middot;
			{word.verb}
		</p>
	{/if}

	{#if word.particle}
		<p>
			{word.particle}
		</p>
	{/if}

	{#if word.mairoot}
		<p class="space">
			<b>mai{word.word}</b> &middot;
			{word.mairoot}
		</p>
	{/if}

	{#if word.origin && word.origin !== '-'}
		<p class="space">
			{word.origin}
			<span class="faded"> from </span>
		</p>
		<p>
			{word.language} 
		</p>
	{/if}
	{#if word.extra}
		<p class="space">
			<b>Extra:</b> &middot;
			{word.extra}
		</p>
	{/if}
</div>

<style lang="postcss">
	.space {
		@apply mt-4;
	}

	.compact .space {
		@apply mt-2;
	}
</style>
