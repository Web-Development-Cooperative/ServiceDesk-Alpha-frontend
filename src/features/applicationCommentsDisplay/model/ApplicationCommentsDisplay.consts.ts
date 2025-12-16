import type { Attachment, Comment } from '~~>shared/ui/others';

const FILES: Array<Attachment> = [
	{
		id: '1',
		name: 'screenshot_slow_internet.jpg',
		size: '254 KB',
		type: 'jpg',
		url: '/files/screenshot_slow_internet.jpg',
	},
	{
		id: '2',
		name: 'speed_test_results.pdf',
		size: '512 KB',
		type: 'pdf',
		url: '/files/speed_test_results.pdf',
	},
];

const COMMENTS: Array<Comment> = [
	{
		id: '1',
		author: 'Петров П. П.',
		role: 'user',
		text: 'Добрый день! Проблема с интернетом началась с утра сегодня...',
		date: '20.09.2025, 14:35',
	},
	{
		id: '2',
		author: 'Иванов И. И.',
		role: 'executor',
		text: 'Понял проблему. Проверил логи на маршрутизаторе...',
		date: '20.09.2025, 15:20',
	},
	{
		id: '3',
		author: 'Kванов P. И.',
		role: 'executor',
		text: 'Обновил прошивку на основном коммутаторе...',
		date: '20.09.2025, 16:45',
		attachments: [
			{
				id: 'f1',
				name: 'network_diagnostic_guide.pdf',
				size: '1.2 MB',
				type: 'pdf',
				url: '#',
			},
			{
				id: 'f2',
				name: 'network_diagnostic_guide.png',
				size: '1.2 MB',
				type: 'png',
				url: '#',
			},
		],
	},
];

export { FILES, COMMENTS };
