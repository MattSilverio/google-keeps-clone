import { api } from './api';

export async function getNotesList() {
	const response = await api.get('/notes');
	return response.data;
}
