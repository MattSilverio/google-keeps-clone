<script lang="ts">
  import type { Note } from '../../interfaces/notes';
  import { updateNoteById } from '../../services/notes';
  import { onMount, onDestroy } from 'svelte';

  onMount(() => {
    window.addEventListener('click', handleClickOutside);
  });

  onDestroy(() => {
    window.removeEventListener('click', handleClickOutside);
  });

  export let note: Note;
  export let isVisible: boolean;

  let title = '';
  let content = '';

  async function updateNote() {
    let data = {};

    if (title !== '' && content !== '') {
      data = { title, content };
    } else if (title !== '') {
      data = { title };
    } else if (content !== '') {
      data = { content };
    }

    await updateNoteById(note.id, data);

    isVisible = false; // Oculta o componente após atualizar a nota
  }

  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.container-card')) {
      isVisible = false; // Oculta o componente se o clique for fora dele
    }
  }
</script>

<style>
  .container-card {
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 220px;
    background-color: #d40f0f3d;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .08), 0 1px 2px rgba(0, 0, 0, .12);
    transition: opacity 0.3s ease;
    opacity: 1;
  }

  .content {
    display: flex;
    gap: 20px;
    flex-direction: column;
    padding: 16px;
    width: 80%;
    height: 100%;
  }
</style>

{#if isVisible}
<div class="container-card">
  <form class="content">
    <label>Editar Título</label>
    <input type="text" bind:value={title} />
    <label>Editar Conteúdo</label>
    <input type="text" bind:value={content} />
    <button type="submit" on:click={updateNote}>Salvar</button>
  </form>
</div>
{/if}

