let env: ImportMetaEnv;

try {
	env = import.meta.env;
} catch (error) {
	console.error('Ошибка при получении переменных окружения:', error);
}

export { env };
