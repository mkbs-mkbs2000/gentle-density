export { matchers } from './client-matchers.js';

			export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2')];

			export const server_loads = [];

			export const dictionary = {
	"/toronto-building-permits": [2]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};