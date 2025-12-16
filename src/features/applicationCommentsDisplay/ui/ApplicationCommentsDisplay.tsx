import { CommentFileItem, CommentItem, UniList } from '~~>shared/ui/others';
import { Textarea } from '~~>shared/ui/inputs';
import { BaseButton } from '~~>shared/ui/buttons';
import { PaperClip } from '~~>shared/ui/icons';

import { useApplicationCommentsDisplay } from '../lib/useApplicationCommentsDisplay';
import styles from './ApplicationCommentsDisplay.module.css';

const ApplicationCommentsDisplay = () => {
	const {
		files,
		comments,
		inputRef,
		handleClick,
		deleteFile,
		handleFileChange,
	} = useApplicationCommentsDisplay();
	return (
		<div className={styles['application-comments']}>
			{comments.length ? (
				<UniList
					className={styles.comments}
					items={comments}
					renderItem={(item) => <CommentItem item={item} />}
				/>
			) : (
				<p>Данных нет</p>
			)}
			<div className={styles['new-cooment']}>
				<p>Добавить комментарий</p>
				<Textarea className={styles.textarea} />
				{!!files.length && (
					<UniList
						className={styles['comment-file-list']}
						items={files}
						renderItem={(item) => (
							<CommentFileItem
								item={item}
								type="new"
								onClick={deleteFile}
							/>
						)}
					/>
				)}
				<div className={styles['btn-wrapper']}>
					<input
						ref={inputRef}
						type="file"
						style={{ display: 'none' }}
						onChange={handleFileChange}
					/>
					<BaseButton
						className={styles['attach-file']}
						onClick={handleClick}
						typeButton="base"
					>
						<PaperClip /> Прикрепить файл
					</BaseButton>
					<BaseButton>Отправить</BaseButton>
				</div>
			</div>
		</div>
	);
};

export { ApplicationCommentsDisplay };
