type FilesPostQuery = {
	originalName: string;
	contentType: string;
	sizeBytes: number;
};
type FilesPostDTO = {
	id: '3fa85f64-5717-4562-b3fc-2c963f66afa6';
	originalName: 'string';
	contentType: 'string';
	sizeBytes: 0;
	bucket: 'string';
	key: 'string';
	url: 'string';
	status: 'PENDING_UPLOAD';
	createdAt: '2025-11-03T16:39:08.620Z';
};

type FilesGetDTO = FilesPostDTO;

export type { FilesPostQuery, FilesPostDTO, FilesGetDTO };
