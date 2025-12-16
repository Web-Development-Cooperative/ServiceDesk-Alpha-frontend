import { useRef, useState, type ChangeEvent } from 'react';

import { COMMENTS } from '../model/ApplicationCommentsDisplay.consts';
import type { Attachment } from '~~>shared/ui/others';

const useApplicationCommentsDisplay = () => {
	const [files, setFiles] = useState<Array<Attachment>>([]);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClick = () => {
		inputRef.current?.click();
	};

	const deleteFile = (id: Attachment['id']) => {
		setFiles((cv) => cv.filter((f) => f.id !== id));
	};
	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const selectedFiles = e.target.files;
		if (!selectedFiles) return;

		const newFiles: Array<Attachment> = Array.from(selectedFiles).map(
			(file, index) => ({
				id: (file.name + files.length + index + 1).toString(),
				name: file.name,
				size: `${(file.size / 1024).toFixed(0)} KB`,
				type:
					(file.name.split('.').pop() as Attachment['type']) ||
					'other',
				url: URL.createObjectURL(file),
			})
		);

		setFiles((prev) => [...prev, ...newFiles]);
		e.target.value = '';
	};

	return {
		files,
		inputRef,
		handleClick,
		deleteFile,
		handleFileChange,
		comments: COMMENTS,
	};
};

export { useApplicationCommentsDisplay };
