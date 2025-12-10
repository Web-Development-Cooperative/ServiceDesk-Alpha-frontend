import type { TYPE_BACKGROUD } from '~~>shared/ui/others/brightBackground/model/consts';

const STATUS_APPLICATION: Record<
	keyof Omit<typeof TYPE_BACKGROUD, 'purple' | 'crayola'>,
	string
> = {
	success: 'Завершена',
	danger: 'Отклонена',
	inProgress: 'В работе',
	primary: 'Новая',
};

export { STATUS_APPLICATION };
