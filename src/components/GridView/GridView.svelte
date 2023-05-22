<script lang=ts>
  import Card from "../Card/Card.svelte";
  import { NoteStatus, type Note } from "../../interfaces/notes";
	import { afterUpdate, beforeUpdate, onMount, setContext } from "svelte";
	import { getNotesList } from "../../services/notes";
	
	

  let currentRoute = ""
  let notes: Note[] = [];
  
  $: filteredNotes = notes.filter((note) => note.status === NoteStatus.ACTIVE);
  $: archivedNotes = notes.filter((note) => note.status === NoteStatus.ARCHIVED);
  $: trashedNotes = notes.filter((note) => note.status === NoteStatus.DELETED);
  $: remindersNotes = notes.filter((note) => note.isReminder === true);

  // Atualiza a lista de notas
  async function updateNotes() {
    const response = await getNotesList();
    notes = response;    
  }

  beforeUpdate(() => {
    currentRoute = window.location.pathname;
  });

  // Atualiza as notas quando o componente é montado
  onMount(async () => {
    await updateNotes();
  });

  // Atualiza as notas após uma atualização
  afterUpdate(() => {
    updateNotes();
  });

  
  
</script>


<style>
  .grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    margin: 20px 20px;
  }
</style>

<div class="grid">
  
  {#if currentRoute === "/"}
  {#each filteredNotes as note}
  {#key note.status }
   <Card note={note}  />
   {/key}
  {/each }
  {/if}
  
  {#if currentRoute === "/reminders"}
  {#each remindersNotes as note}
  <Card note={note}  />
  {/each }
  {/if}

  {#if currentRoute === "/archive"}
  {#each archivedNotes as note}
    <Card note={note}  />
  {/each }
  {/if}
  
  {#if currentRoute === "/trash"}
  {#each trashedNotes as note}
    <Card note={note}  />
  {/each}
  {/if}
  
  
</div>
