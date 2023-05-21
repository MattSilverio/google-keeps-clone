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
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
  }

  li:hover{
    background-color: #e8eaed;
  }

  a{
    text-decoration: none;
    color: #5f6368;
  }

  .aside-bar{
    margin-top: 20px;
    width: 200px;
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
      <div>
        <FaRegLightbulb />
      </div>
      <a href="/">Notas</a>
    </li>
    <li>
      <div>
        <FaRegBell/>
      </div>
      <a href="/reminders">Lembretes</a>
    </li>
    <li>
      <div>
        <FaArchive/>
      </div>
      <a href="/archive">Arquivo</a>
    </li>
    <li>
      <div>
        <FaRegTrashAlt/>
      </div>
      <a href="/trash">Lixeira</a>
    </li>
  </ul>
</aside>

