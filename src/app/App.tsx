import { useKeycloak } from '@react-keycloak/web';
import { ToastContainer } from 'react-toastify';

import { AppRouter } from '~~>app/routers';

function App() {
	const { initialized } = useKeycloak();

	if (!initialized) return <>Загрузка...</>;
	return (
		<div className="App">
			<ToastContainer limit={7} />
			<AppRouter />
		</div>
	);
}

export { App };
