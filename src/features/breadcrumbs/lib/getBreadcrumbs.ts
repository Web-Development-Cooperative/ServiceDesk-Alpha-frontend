import { ADAPTER_ROUTES_BREADCRUMBS, ROUTES } from '~~>shared/model/routes';

import type { AppState } from '~~>app/store/store';

interface Crumb {
	label: string | undefined;
	path?: string;
}

type DynamicSelectors = {
	[key: string]: (
		state: AppState,
		id: string
	) => { forBread?: string } | undefined;
};

const selectUser = (state: AppState) => state.user.user;

const DYNAMIC_SELECTORS: DynamicSelectors = {
	[ROUTES.USER]: (state, id) => ({
		forBread:
			selectUser(state)?.id == +id ? selectUser(state)?.email : undefined,
	}),
};

const getBreadcrumbs = (pathname: string, state: AppState): Crumb[] => {
	const segments = pathname.split('/').filter(Boolean);

	const crumbs: Crumb[] = segments.map((segment, index) => {
		const path = '/' + segments.slice(0, index + 1).join('/');

		// ищем точное совпадение в словаре
		let label: string | undefined =
			ADAPTER_ROUTES_BREADCRUMBS[
				path as keyof typeof ADAPTER_ROUTES_BREADCRUMBS
			];

		// если нет точного совпадения, ищем динамический путь
		if (!label) {
			for (const [dynPath, selector] of Object.entries(
				DYNAMIC_SELECTORS
			)) {
				// создаём RegExp вида /users/:userId/posts/:postId -> ^/users/([^/]+)/posts/([^/]+)$
				const regex = new RegExp(
					'^' + dynPath.replace(/:([^/]+)/g, '([^/]+)') + '$'
				);
				const match = path.match(regex);
				if (match) {
					const id = match[1];
					const entity = selector(state, id);
					label = entity?.forBread;
					// label =
					// 	entity?.forBread ??
					// 	ADAPTER_ROUTES_BREADCRUMBS[
					// 		dynPath as keyof typeof ADAPTER_ROUTES_BREADCRUMBS
					// 	];
					break;
				}
			}
		}

		// if (!label) label = decodeURIComponent(segment);

		return {
			label,
			path: index < segments.length - 1 ? path : undefined,
		};
	});

	// добавляем Главную в начало
	crumbs.unshift({ label: 'Главная', path: '/' });

	return crumbs;
};

export { getBreadcrumbs };
