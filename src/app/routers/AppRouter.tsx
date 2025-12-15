import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import { AuthProvider, GuestProvider } from '~~>app/providers';
import { ROUTES } from '~~>shared/model/routes';

const HeaderLayout = lazy(() => import('~~>app/layouts/mainLayout'));
const MyApplicationsLayout = lazy(
	() => import('~~>app/layouts/myApplicationsLayout')
);
const LoginPage = lazy(() => import('~~>pages/login'));
const MyApplicationsAllPage = lazy(() => import('~~>pages/myApplicationsAll'));
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
				path: ROUTES.MY_APPLICATIONS,
				element: (
					<Suspense fallback={<div>Загрузка компонента...</div>}>
						<MyApplicationsLayout />
					</Suspense>
				),
				children: [
					{
						index: true,
						element: <Navigate to={ROUTES.MY_APPLICATIONS_All} />,
					},
					{
						path: ROUTES.MY_APPLICATIONS_All,
						element: (
							<Suspense
								fallback={<div>Загрузка компонента...</div>}
							>
								<MyApplicationsAllPage />
							</Suspense>
						),
					},
					{
						path: ROUTES.MY_APPLICATIONS_ACTIVE,
						element: (
							<Suspense
								fallback={<div>Загрузка компонента...</div>}
							>
								<h1>Active page</h1>
							</Suspense>
						),
					},
					{
						path: ROUTES.MY_APPLICATIONS_COMPLETED,
						element: (
							<Suspense
								fallback={<div>Загрузка компонента...</div>}
							>
								<h1>Completed page</h1>
							</Suspense>
						),
					},
				],
			},
		],
	},
]);

const AppRouter = () => {
	return <RouterProvider router={router} />;
};

export { AppRouter };
