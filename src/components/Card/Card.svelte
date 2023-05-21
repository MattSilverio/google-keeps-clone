<script lang="ts">
  import FaRegTrashAlt from 'svelte-icons/fa/FaRegTrashAlt.svelte'
  import FaArchive from 'svelte-icons/fa/FaArchive.svelte'
  import type { Note } from '../../interfaces/notes';
  
  export let note: Note;
  
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
    flex-direction: column;
    padding: 16px;
    width: 100%;
    height: 100%;
  }

  .functionalities{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;
    width: 100%;
    height: 100%;
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
    {note.title}
    {note.content}
  </div>

  <div class="functionalities">
    <button>
      <FaRegTrashAlt />
    </button>
    <button>
      <FaArchive />
    </button> 
  </div>
</div>