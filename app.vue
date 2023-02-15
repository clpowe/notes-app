<template>
	<div>
		<NuxtPage />
	</div>
</template>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	/* Box sizing rules */
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	/* Remove default padding */
	ul[class],
	ol[class] {
		padding: 0;
	}

	/* Remove default margin */
	body,
	h1,
	h2,
	h3,
	h4,
	p,
	ul[class],
	ol[class],
	figure,
	blockquote,
	dl,
	dd {
		margin: 0;
	}

	/* Set core root defaults */
	html {
		scroll-behavior: smooth;
	}

	/* Set core body defaults */
	body {
		min-height: 100vh;
		text-rendering: optimizeSpeed;
		line-height: 1.5;
	}

	/* Remove list styles on ul, ol elements with a class attribute */
	ul[class],
	ol[class] {
		list-style: none;
	}

	/* A elements that don't have a class get default styles */
	a:not([class]) {
		text-decoration-skip-ink: auto;
	}

	/* Make images easier to work with */
	img,
	picture {
		max-width: 100%;
		display: block;
	}

	/* Natural flow and rhythm in articles by default */
	article > * + * {
		margin-top: 1em;
	}

	/* Inherit fonts for inputs and buttons */
	input,
	button,
	textarea,
	select {
		font: inherit;
	}

	/* Remove all animations and transitions for people that prefer not to see them */
	@media (prefers-reduced-motion: reduce) {
		* {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
	}

	:root {
		--ratio: 1.25;
		--s-6: calc(var(--s-5) / var(--ratio));
		--s-5: calc(var(--s-4) / var(--ratio));
		--s-4: calc(var(--s-3) / var(--ratio));
		--s-3: calc(var(--s-2) / var(--ratio));
		--s-2: calc(var(--s-1) / var(--ratio));
		--s-1: calc(var(--s0) / var(--ratio));
		--s0: 1rem;
		--s1: calc(var(--s0) * var(--ratio));
		--s2: calc(var(--s1) * var(--ratio));
		--s3: calc(var(--s2) * var(--ratio));
		--s4: calc(var(--s3) * var(--ratio));
		--s5: calc(var(--s4) * var(--ratio));
		--s6: calc(var(--s5) * var(--ratio));
		--s7: calc(var(--s6) * var(--ratio));
		--s8: calc(var(--s7) * var(--ratio));
		--s9: calc(var(--s8) * var(--ratio));
	}

	html {
		font-size: var(--s0);
		font-size: clamp(var(--s0), 0.95rem + 0.25vw, var(--s4));
	}

	html {
		overflow-x: hidden;
	}

	body {
		line-height: 1.5;
		overflow-x: hidden;
		padding-bottom: get-size('600');
		font-family: 'Inter', sans-serif;
		background-color: #fff;
		min-height: 100vh;
	}

	h1,
	h2,
	h3 {
		line-height: 1;
	}

	h1 {
		font-size: var(--s5);
	}

	h2 {
		font-size: var(--s4);
	}
	h3 {
		font-size: var(--s3);
	}
	h3 {
		font-size: var(--s2);
	}

	a {
		color: currentColor;
	}

	table {
		border-collapse: collapse;
	}

	th {
		text-align: left;
	}

	* {
		box-sizing: border-box;
		max-inline-size: 60ch;
	}

	html,
	body,
	div,
	header,
	section,
	nav,
	main,
	footer {
		max-inline-size: none;
	}

	ol {
		list-style-type: none;
		padding: 0;
	}

	.container {
		max-width: 1440px;
		margin-inline: auto;
		padding-inline-start: 1rem;
		padding-inline-end: 1rem;
	}

	.visually-hidden {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}

	.mygrid {
		display: grid;
		grid-gap: 1rem;
	}

	@supports (width: min(250px, 100%)) {
		.mygrid {
			grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
		}
	}

	.ql-editor {
		height: 100%;
	}
</style>
