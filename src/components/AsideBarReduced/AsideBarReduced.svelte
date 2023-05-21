<script>
  import FaRegLightbulb from 'svelte-icons/fa/FaRegLightbulb.svelte'
  import FaRegBell from 'svelte-icons/fa/FaRegBell.svelte'
  import FaRegTrashAlt from 'svelte-icons/fa/FaRegTrashAlt.svelte'
  import FaArchive from 'svelte-icons/fa/FaArchive.svelte'

  
  </script>
  
  <style>
   
    div{
      width: 100%;
      height: 24px;
    }

    div:hover{
      background-color: #e8eaed;
      border-radius: 8px;
    }
  
    li{
      display: flex;
      align-items: center;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
  
    .aside-bar{
      margin-top: 20px;
      width: 50px;
      margin-left: 16px;
      height: 200px;
      background-color: transparent;
      padding: 18px;
      z-index: 999;
    }
  </style>
  
  <aside class="aside-bar">
    <ul>
      <li>
        <div>
          <a href="/"><FaRegLightbulb /></a>
        </div>
      </li>
      <li>
        <div>
          <a href="/reminders"><FaRegBell/></a>
        </div>
      </li>
      <li>
        <div>
          <a href="/archive"><FaArchive/></a>
        </div>
      </li>
      <li>
        <div>
          <a href="/trash"><FaRegTrashAlt/></a>
        </div>
      </li>
    </ul>
  </aside>
  
  