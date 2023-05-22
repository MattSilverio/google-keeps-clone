<script lang="ts">
  import FaRegTrashAlt from 'svelte-icons/fa/FaRegTrashAlt.svelte'
  import FaArchive from 'svelte-icons/fa/FaArchive.svelte'
  import FaPencilAlt from 'svelte-icons/fa/FaPencilAlt.svelte'
  import FaRedoAlt from 'svelte-icons/fa/FaRedoAlt.svelte'
  import FaRegBell from 'svelte-icons/fa/FaRegBell.svelte'

  import { NoteStatus, type Note } from '../../interfaces/notes';
	import { deleteNoteById, updateNoteById } from '../../services/notes';
	
	import EditCardPopUp from './EditCardPopUp.svelte';
  
  export let note: Note;

  let currentRoute = window.location.pathname;
  let showPopUpEdit = false

  async function deleteNote() {
    await deleteNoteById(note.id);
    if (note.isReminder) toggleNoteAsReminder();
  }

  async function archiveNote() {
    const data = { status: NoteStatus.ARCHIVED };
    
    await updateNoteById(note.id, data);  
  }

  async function toggleNoteAsReminder(){
    const data = { isReminder: !note.isReminder };
    await updateNoteById(note.id, data);
  }

  async function recoverNote(){
    const data = { isReminder: false, status: NoteStatus.ACTIVE };
    
    await updateNoteById(note.id, data);  
  } 

  function handleEditCard() {
    showPopUpEdit = !showPopUpEdit;
  }
</script>

<style>
  .container-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0,0,0,.08), 0 1px 2px rgba(0,0,0,.12);
  }

  .content {
    display: flex;
    gap: 20px;
    flex-direction: column;
    padding: 16px;
    width: 100%;
    height: 100%;
  }

  .content h1{
    font-size: 24px;
    font-weight: 600;
    color: #000;
  }
  .functionalities{
    display: flex;
    flex-direction: row;
    padding: 16px;
    height: 24px;
  }

  button{
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

</style>

<div class="container-card">
  <div class="content">
    <h1>{note.title}</h1>
    <p>{note.content}</p>
  </div>

  <div class="functionalities">
    <button on:click={() => deleteNote()}>
      <FaRegTrashAlt />
    </button>
    
    <button on:click={() => archiveNote()}>
      <FaArchive />
    </button>
    
    <button on:click={() => toggleNoteAsReminder()}>
      <FaRegBell />
    </button>


    <button on:click={handleEditCard}>
      <FaPencilAlt />
    </button>
    
    
    {#if currentRoute !== '/'}
    <button on:click={() => recoverNote()}>
      <FaRedoAlt />
    </button>
    {/if}
    
        
    <EditCardPopUp note={note} isVisible={showPopUpEdit} on:close={handleEditCard} />
    
  </div>
</div>
