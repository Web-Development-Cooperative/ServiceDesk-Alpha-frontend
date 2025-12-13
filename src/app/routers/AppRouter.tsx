import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import { AuthProvider, GuestProvider } from '~~>app/providers';
import { ROUTES } from '~~>shared/model/routes';

const HeaderLayout = lazy(() => import('~~>app/layouts/mainLayout'));
const LoginPage = lazy(() => import('~~>pages/login'));
const ApplicationsPage = lazy(() => import('~~>pages/applications'));
const BranchesPage = lazy(() => import('~~>pages/branches'));
const BranchPage = lazy(() => import('~~>pages/branch'));
const ApplicationsCategoriesPage = lazy(
	() => import('~~>pages/applicationsCategories')
);
const BranchesTypesPage = lazy(() => import('~~>pages/branchesTypes'));

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
				element: <Navigate to={ROUTES.BRANCHES} />,
			},
			{
				path: ROUTES.BRANCHES,
				element: (
					<Suspense fallback={<div>Загрузка компонента...</div>}>
						<BranchesPage />
					</Suspense>
				),
			},
			{
				path: ROUTES.BRANCH,
				element: (
					<Suspense fallback={<div>Загрузка компонента...</div>}>
						<BranchPage />
					</Suspense>
				),
			},
			{
				path: ROUTES.APPLICATIONS_CATEGORIES,
				element: (
					<Suspense fallback={<div>Загрузка компонента...</div>}>
						<ApplicationsCategoriesPage />
					</Suspense>
				),
			},
			{
				path: ROUTES.BRANCHES_TYPES,
				element: (
					<Suspense fallback={<div>Загрузка компонента...</div>}>
						<BranchesTypesPage />
					</Suspense>
				),
			},
			{
				path: ROUTES.APPLICATIONS,
				element: (
					<Suspense fallback={<div>Загрузка компонента...</div>}>
						<ApplicationsPage />
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
