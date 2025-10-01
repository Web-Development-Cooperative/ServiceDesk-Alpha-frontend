import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import { ROUTES } from '~~>shared/model/routes';

const HeaderLayout = lazy(() => import('~~>app/layouts/mainLayout'));
const HomePage = lazy(() => import('~~>pages/home'));
const UsersPage = lazy(() => import('~~>pages/users'));
const UserPage = lazy(() => import('~~>pages/user'));

const router = createBrowserRouter(
	[
		{
			path: ROUTES.HOME,
			element: <HeaderLayout />,
			children: [
				{
					index: true,
					element: <HomePage />,
				},
				{
					path: ROUTES.USERS,
					element: <UsersPage />,
				},
				{
					path: ROUTES.USER,
					element: <UserPage />,
				},
			],
		},
	],
	{
		basename: import.meta.env.BASE_URL,
	}
);

const AppRouter = () => {
	return <RouterProvider router={router} />;
};

export { AppRouter };
