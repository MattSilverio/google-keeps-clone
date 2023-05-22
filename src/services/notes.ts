import { api } from './api';

export async function getNotesList() {
	const response = await api.get('/notes');
	return response.data;
}

export async function getNoteById(id: string) {
	const response = await api.get(`/notes/${id}`);
	return response.data;
}

export async function createNewNote() {
	const response = await api.post('/notes');
	return response.data;
}

export async function deleteNoteById(id: string) {
	const response = await api.delete(`/notes/${id}`);
	return response.data;
}

export async function updateNoteById(id: string, data: any) {
	const response = await api.put(`/notes/${id}`, data);
	return response.data;
}
