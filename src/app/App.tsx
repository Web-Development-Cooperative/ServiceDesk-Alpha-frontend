import { ToastContainer } from 'react-toastify';

import { AppRouter } from '~~>app/routers';

function App() {
	return (
		<div className="App">
			<ToastContainer limit={7} />
			<AppRouter />
		</div>
	);
}

export { App };
