<script lang="ts">
  import App from "../App.Svelte";
	import { getNotesList } from "../services/notes";
  import type { Note } from "../interfaces/notes";
  import	{onMount} from "svelte";

  let notes: Note[];
  onMount(async () => {
    const result = await getNotesList();
    notes = result
    
  });
</script>

<style>
  .container {
    display: grid;
    grid-template-columns: 200px 1fr 1fr 1fr 1fr;
    gap: 16px;
  }
</style>

<App/>
<!-- <div class="container">

  {#if notes}
  <ul>
    {#each notes as note}
      <Card note={note} />
    {/each}
  </ul>
{/if}
</div> -->