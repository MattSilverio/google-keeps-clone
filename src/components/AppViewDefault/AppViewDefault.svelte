<script>
  import GridView from "../GridView/GridView.svelte";
  import NavBar from "../NavBar/NavBar.svelte";

</script>

<style>
  .conteiner{
    display: grid;
    grid-template-columns: 200px 1fr;;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .cards-conteiner{
    grid-column: 2;
    position: relative;
    top: 4rem;
  }
</style>

<div class="conteiner">
  <NavBar/>
  <div class='cards-conteiner'>
    <GridView/>
    
  </div>

</div>