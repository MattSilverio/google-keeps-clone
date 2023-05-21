<script>
  import FaBars from 'svelte-icons/fa/FaBars.svelte'
  import FaSearch from 'svelte-icons/fa/FaSearch.svelte'
  import FaTimes from 'svelte-icons/fa/FaTimes.svelte'
  import { AsideMenu } from '../../store/states';
	import AsideBar from '../AsideBar/AsideBar.svelte';
	import AsideBarReduced from '../AsideBarReduced/AsideBarReduced.svelte';

 $: showAsideMenu = AsideMenu;
  function toggleAsideMenu(){
    showAsideMenu = !showAsideMenu;
    
  }
</script>

  <style>
      nav{
        display: flex;
        width: 100vw;
        height: 30px;
        align-items: center;
        padding: 12px;
        border-bottom: 1px solid #dadce0;
      }
  
      .icon{
        color: #5f6368;
        margin: 0 24px;
        padding: 12px;
        width: 24px;
        height: 24px;
        cursor: pointer;
      }

      .icon:hover{
        background-color: rgba(60,64,67,.08);
        outline: none;
        border-radius: 50%;
        
        overflow: hidden;
      }

      input{
        padding: 11px 0;
        background-color: rgba(0,0,0,.2);
        border: none;
        outline: none;
        width: 100%;
      }

      .container{
        display: flex;
        padding-right: 30px;
        width: 40rem;
      }

      form{
        display: flex;
        width: 100%;
        justify-content: space-between;
      }

      .search{
        width: 32px;        
        background-color: rgba(0,0,0,.2);
        border: none;
        border-radius: 8px 0 0 8px;
        cursor: pointer;
      }
      .search:hover{
        color: rgba(0,0,0,.4);
      }

      .cancel{
        width: 24px;
        margin-right: 5px;
        background-color: rgba(0,0,0,.2);
        border: none;
        border-radius: 0 8px 8px 0;
        cursor: pointer;
      }

      .cancel:hover{
        color: rgba(0,0,0,.4);
      }
  </style>

  <nav>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="icon" on:click={toggleAsideMenu}>
      <FaBars />
    </div>

    <div class="container">
      <form>
        <button class="search"><FaSearch /></button>
        <input type="text" placeholder="Search" />
        <button class="cancel"><FaTimes /></button>
      </form>
    </div>

  </nav>

  {#if showAsideMenu}
    
      <AsideBar/>
   
  {/if}
  {#if !showAsideMenu}
    <AsideBarReduced/>
  {/if}
