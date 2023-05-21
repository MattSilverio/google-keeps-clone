import type { Note } from './notes';

export interface Tag {
	id: string;
	name: string;
	notes: Note[];
}
