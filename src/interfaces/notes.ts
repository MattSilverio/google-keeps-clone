import type { Tag } from './tag';

enum NoteStatus {
	ACTIVE = 'ACTIVE',
	ARCHIVED = 'ARCHIVED',
	DELETED = 'DELETED'
}

export interface Note {
	id: string;
	title: string;
	content: string;
	createdAt: string;
	updatedAt: string;
	tag: Tag[];
	isReminder: boolean;
	status: NoteStatus;
}
