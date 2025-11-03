import { baseApi } from '~~>shared/api';
import { FILES_TAG } from '~~>shared/model/storeConsts';

import type { FilesPostDTO, FilesPostQuery } from '../model/types';

const fileApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		postInitFile: build.mutation<FilesPostDTO, FilesPostQuery>({
			query: (params) => ({
				url: '/files/init',
				params,
				method: 'POST',
			}),
			invalidatesTags: [FILES_TAG],
		}),
		confirmFile: build.mutation<FilesPostDTO, string>({
			query: (fileId) => ({
				url: `/files/${fileId}/confirm`,
				method: 'POST',
			}),
			invalidatesTags: [FILES_TAG],
		}),
	}),
});

const { usePostInitFileMutation, useConfirmFileMutation } = fileApi;

export { fileApi, usePostInitFileMutation, useConfirmFileMutation };
