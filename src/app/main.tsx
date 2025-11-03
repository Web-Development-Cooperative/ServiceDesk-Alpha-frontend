import { createRoot } from 'react-dom/client';

import { Providers } from '~~>app/providers';
import { App } from '~~>app/App';
// import { env } from '~~>shared/lib';

import '~~>shared/assets/styles/reset.css';
import '~~>shared/assets/styles/index.css';

createRoot(document.getElementById('root')!).render(
	<Providers>
		<App />
	</Providers>
);

// if (import.meta.env.DEV || env.VITE_MODE === 'development') {
// 	const { apiMockWorker } = await import('./apiMockWorker');

// 	await apiMockWorker.start({
// 		onUnhandledRequest: 'warn',
// 		serviceWorker: {
// 			url: '/mockServiceWorker.js',
// 		},
// 	});
// }