export const SITE = {
	title: 'Documentation',
	description: 'Your website description.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

export const SIDEBAR = {
	en: [
		{ text: 'Getting Started with Agrippa', link: 'getting-started' },
		
		{ text: 'Guides', header: true },
		{ text: 'Set up Agrippa in a project', link: 'guides/setup-agrippa-in-a-project' },
		{ text: 'Lint & Prettify created files', link: 'guides/lint-and-prettify-created-files' },
		{ text: 'Automatically open your IDE to a generated component', link: 'guides/automatically-open-your-ide-to-a-generated-component' },

		{ text: 'Environments', header: true },
		{ text: 'Typescript', link: 'environments/typescript' },
		{ text: 'React (WIP)' },
		{ text: 'Solid.js (WIP)' },
		{ text: 'Preact (WIP)' },
		{ text: 'React Native (WIP)' },
		{ text: 'Vue (Coming soon)' },
		{ text: 'Svelte (Coming soon)' },
		{ text: 'Storybook (Coming soon)' },
	],
};
