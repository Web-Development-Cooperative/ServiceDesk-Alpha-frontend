import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import { AuthProvider, GuestProvider } from '~~>app/providers';
import { ROUTES } from '~~>shared/model/routes';

const HeaderLayout = lazy(() => import('~~>app/layouts/mainLayout'));
const LoginPage = lazy(() => import('~~>pages/login'));
const HomePage = lazy(() => import('~~>pages/home'));

const router = createBrowserRouter([
	{
		path: ROUTES.LOGIN,
		element: (
			<Suspense fallback={<div>Загрузка компонента...</div>}>
				<GuestProvider>
					<LoginPage />
				</GuestProvider>
			</Suspense>
		),
	},
	{
		path: ROUTES.HOME,
		element: (
			<AuthProvider>
				<Suspense fallback={<div>Загрузка компонента...</div>}>
					<HeaderLayout />
				</Suspense>
			</AuthProvider>
		),
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<div>Загрузка компонента...</div>}>
						<HomePage />
					</Suspense>
				),
			},
		],
	},
]);

const AppRouter = () => {
	return <RouterProvider router={router} />;
};

export { AppRouter };
