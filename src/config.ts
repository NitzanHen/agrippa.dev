import type { LeftSidebarLink } from './components/LeftSidebar';
import { branch, leaf, Tree } from './utils/Tree';

export const SITE = {
	title: 'Agrippa docs',
	description: 'Documentation for Agrippa, the frontend component CLI',
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

export const SIDEBAR = [
	{ text: 'Getting Started with Agrippa', link: 'getting-started' },

	{ text: 'Environments', header: true },
	{ text: 'Typescript', link: 'environments/typescript' },
	{ text: 'React', link: 'environments/react' },
	{ text: 'SolidJS', link: 'environments/solidjs' },
	{ text: 'Preact', link: 'environments/preact' },
	{ text: 'React Native', link: 'environments/react-native' },
	{ text: 'Vue (Coming soon)' },
	{ text: 'Svelte (Coming soon)' },
	{ text: 'Storybook (Coming soon)' },
	{ text: 'CSS', link: 'environments/css' },
	{ text: 'SCSS', link: 'environments/scss' },

	{ text: 'Guides', header: true },
	{ text: 'Set up Agrippa in a project', link: 'guides/setup-agrippa-in-a-project' },
	{ text: 'Lint & Prettify created files', link: 'guides/lint-and-prettify-created-files' },
	{ text: 'Automatically open your IDE to a generated component', link: 'guides/automatically-open-your-ide-to-a-generated-component' },
	{ text: 'Write your first plugin (Coming soon)' },

	{ text: 'Reference', header: true },
	{ text: 'Config Reference', link: 'reference/config' },
	{ text: 'Config options', link: 'reference/config-options' },
	{ text: 'CLI Reference', link: 'reference/cli' },
	{ text: 'Built-in plugins (Coming soon)', /* link: 'reference/built-in-plugins' */ }

];

export const SIDEBAR_TREE = [
	leaf<LeftSidebarLink>({ text: 'Getting Started with Agrippa', link: 'getting-started' }),
	branch<LeftSidebarLink>({ text: 'Environments', header: true },
		[
			{ text: 'Typescript', link: 'environments/typescript' },
			{ text: 'React', link: 'environments/react' },
			{ text: 'SolidJS', link: 'environments/solidjs' },
			{ text: 'Preact', link: 'environments/preact' },
			{ text: 'React Native', link: 'environments/react-native' },
			{ text: 'Vue (Coming soon)' },
			{ text: 'Svelte (Coming soon)' },
			{ text: 'Storybook (Coming soon)' },
			{ text: 'CSS', link: 'environments/css' },
			{ text: 'SCSS', link: 'environments/scss' },
		]),

	branch<LeftSidebarLink>({ text: 'Guides', header: true }, [
		{ text: 'Set up Agrippa in a project', link: 'guides/setup-agrippa-in-a-project' },
		{ text: 'Lint & Prettify created files', link: 'guides/lint-and-prettify-created-files' },
		{ text: 'Automatically open your IDE to a generated component', link: 'guides/automatically-open-your-ide-to-a-generated-component' },
		{ text: 'Write your first plugin (Coming soon)' },
	]),

	branch<LeftSidebarLink>({ text: 'Reference', header: true }, [
		{ text: 'Config Reference', link: 'reference/config' },
		{ text: 'Config options', link: 'reference/config-options' },
		{ text: 'CLI Reference', link: 'reference/cli' },
		{ text: 'Built-in plugins (Coming soon)', /* link: 'reference/built-in-plugins' */ }
	]),
];
