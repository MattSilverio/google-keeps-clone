<script>
import FaRegLightbulb from 'svelte-icons/fa/FaRegLightbulb.svelte'
import FaRegBell from 'svelte-icons/fa/FaRegBell.svelte'
import FaRegTrashAlt from 'svelte-icons/fa/FaRegTrashAlt.svelte'
import FaArchive from 'svelte-icons/fa/FaArchive.svelte'




</script>

<style>
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }

  div{
    width: 48px;
    height: 24px;
  }

  li{
    
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
  }

  li:hover{
    background-color: #e8eaed;
  }

  a{
    display: flex;
    align-items: center;
    justify-content: start;
    text-decoration: none;
    color: #5f6368;
  }

  .aside-bar{
    margin-top: 20px;
    width: 10rem;
    height: 200px;
    border-radius: 8px;
    background-color: #f1f3f4;
    padding: 18px;
    z-index: 999;
  }
</style>

<aside class="aside-bar">
  <ul>
    <li>
      <a href="/">
        <div>
          <FaRegLightbulb />
        </div>
        <span>Notas</span>
      </a>
    </li>
    <li>
      <a href="/reminders">
      <div>
        <FaRegBell/>
      </div>
      <span>Lembretes</span>
    </a>
    </li>
    <li>
      <a href="/archive">
      <div>
        <FaArchive/>
      </div>
      <span>Arquivo</span>
    </a>
    </li>
    <li>
      <a href="/trash">
        <div>
          <FaRegTrashAlt/>
        </div>
        <span>Lixeira</span>
      </a>
    </li>
  </ul>
</aside>

