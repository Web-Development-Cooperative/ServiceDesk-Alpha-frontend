import { useState } from 'react';

import {
	useConfirmFileMutation,
	usePostInitFileMutation,
} from '~~>entities/file';

type UploadedFile = {
	file: File;
	id?: string; // будет после успешного confirm
	status: 'pending' | 'uploaded' | 'error';
};

const LoadFiles = () => {
	const [files, setFiles] = useState<UploadedFile[]>([]);
	const [postInitFile] = usePostInitFileMutation();
	const [confirmFile] = useConfirmFileMutation();

	// Добавление файлов
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;
		const newFiles = Array.from(e.target.files).map((file) => ({
			file,
			status: 'pending' as const,
		}));
		setFiles((prev) => [...prev, ...newFiles]);
		handleUploadAll([...files, ...newFiles]);
	};

	// Удаление файла из списка
	const handleRemoveFile = (index: number) => {
		setFiles((prev) => prev.filter((_, i) => i !== index));
	};

	// Загрузка одного файла
	const uploadFile = async (uploadedFile: UploadedFile, index: number) => {
		const { file } = uploadedFile;
		const params = {
			originalName: file.name,
			contentType: file.type,
			sizeBytes: file.size,
		};

		try {
			// 1️⃣ POST /files/init
			const initResponse = await postInitFile(params).unwrap();

			await fetch(initResponse.url, { method: 'PUT', body: file });

			// 3️⃣ POST /files/{id}/confirm
			await confirmFile(initResponse.id).unwrap();

			// 4️⃣ Обновляем массив файлов с id
			setFiles((prev) => {
				const updated = [...prev];
				updated[index] = {
					...uploadedFile,
					id: initResponse.id,
					status: 'uploaded',
				};
				return updated;
			});
		} catch (error) {
			console.error('Ошибка загрузки файла:', error);
			setFiles((prev) => {
				const updated = [...prev];
				updated[index] = { ...uploadedFile, status: 'error' };
				return updated;
			});
		}
	};

	const handleUploadAll = (array: UploadedFile[]) => {
		array.forEach((file, index) => {
			if (file.status === 'pending') {
				uploadFile(file, index);
			}
		});
	};

	const handleSubmit = () => {
		const uploadedIds = files.filter((f) => f.id).map((f) => f.id);
		console.log('Итоговый массив id загруженных файлов:', uploadedIds);
	};

	return (
		<div>
			<input type="file" multiple onChange={handleFileChange} />
			<ul>
				{files.map((f, i) => (
					<li key={i}>
						{f.file.name} — {f.status}
						<button onClick={() => handleRemoveFile(i)}>
							Удалить
						</button>
					</li>
				))}
			</ul>
			<button onClick={handleSubmit}>Отправить итоговый массив</button>
		</div>
	);
};

export { LoadFiles };
